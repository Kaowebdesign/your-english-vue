<template>
    <div class="baseWordWrap">
        <h4>{{word.orignWord }}</h4>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
            <v-avatar slot="activator" v-if="word.type == 1" color="yellow accent-4" size="10" class="baseAvatar"></v-avatar>
            <span>Слово</span>
        </v-tooltip>
        <v-tooltip bottom>
            <v-avatar slot="activator" v-if="word.type == 2" color="deep-orange" size="10" class="baseAvatar"></v-avatar>
            <span>Фразове дієслово</span>
        </v-tooltip>
        <v-icon v-if="canSoundWord" @click="soundword(word)">music_note</v-icon>
    </div>
</template>

<script>

    export default {
        props:{
            word:Object,
            showAudio: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                canSoundWord:false,
                voice:null
            }
        },
        methods:{
            soundword(word){
                let msg = new SpeechSynthesisUtterance()
                msg.voice = this.voice
                msg.rate = 1
                msg.pitch = 1
                msg.volume = 1
                msg.text = word.orignWord

                speechSynthesis.speak(msg)
            },
            setSpeech(){
                return new Promise(
                    function (resolve, reject) {
                        let synth = window.speechSynthesis;
                        let id = setInterval(() => {
                            let englishVoice = speechSynthesis.getVoices().filter(v => v.name.toLowerCase().indexOf('english') >=1)
                            if (englishVoice !== 0) {
                                resolve(englishVoice[0]);
                                clearInterval(id);
                            }
                        }, 500);
                    }
                )
            }
        },
        created(){
            if(this.showAudio)
                if('speechSynthesis' in window){
                    this.setSpeech().then((voice) => {
                        this.canSoundWord = true
                        this.voice = voice
                    })
                }
        }
    }
</script>

<style lang="scss" scoped>
    .baseWordWrap{
        position:relative;
    }
    .baseAvatar{
        position:absolute;
        top: 0;
        right: -20px;
    }
</style>
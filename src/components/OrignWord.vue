<template>
    <div>
        <h4>{{word.orignWord }}</h4>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
            <v-avatar slot="activator" v-if="word.type == 1" color="yellow accent-4" size="10"></v-avatar>
            <span>Слово</span>
        </v-tooltip>
        <v-tooltip bottom>
            <v-avatar slot="activator" v-if="word.type == 2" color="deep-orange" size="10"></v-avatar>
            <span>Фразове дієслово</span>
        </v-tooltip>
        <v-icon v-if="canSoundWord" @click="soundword(word)">music_note</v-icon>
    </div>
</template>

<script>

    export default {
        props:{
            word:Object
        },
        data(){
            return{
                canSoundWord:false,
                voice:null,
                showAudio:{
                    type:Boolean,
                    default:false
                }
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
            }
        },
        created(){
            if(this.showAudio){
                if('speechSynthesis' in window){
                    let englishVoice = speechSynthesis.getVoices().filter(v => v.name.toLowerCase().indexOf('english') >=1)
                    if(englishVoice.length){
                        this.canSoundWord = true
                        this.voice = englishVoice[0]
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
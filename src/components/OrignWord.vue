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
        <v-icon v-if="canSoundWord" @click="soundWord(word)">music_note</v-icon>
    </div>
</template>

<script>

    export default {
        props:{
            word:Object,
        },
        data(){
            return{
                canSoundWord:false,
                voice:null
            }
        },
        method:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>
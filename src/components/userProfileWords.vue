<template>
    <div>
        <v-card v-if="currentWord" class="mt-2" dark>
            <v-card-title>
                <div class="headline">
                    <original-word :word="currentWord"></original-word>
                </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="headline" v-if="currentWord.showTrans">
                {{currentWord.transWord}}
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark small color="primary" @click="currentWord.showTrans = true" v-if="!currentWord.showTrans">
                    <v-icon>visibility</v-icon> Переклад
                </v-btn>
                <v-btn small dark color="success" @click="processWord(currentWord)">
                    <v-icon>check</v-icon> Запам'ятав(ла)
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-card-title class="display-1" v-if="words.length">
                <span>Всі слова на сьогодні({{words.length}})</span>
            </v-card-title>
            <v-card-title v-else>
                <span>Немає слів для вивчення. Додайте нові слова</span>
            </v-card-title>
            <v-card-text>
                <v-list>
                    <div v-for="(word, index) in words" :key="index">
                        <v-list-tile @click="selectWord(word)">
                            <div class="title pa-1">
                                <original-word :word="word"></original-word>
                            </div>
                        </v-list-tile>
                    </div>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import OriginalWord from './OrignWord'
    export default {
        data(){
            return{
                words:[],
                currentWord:null
            }
        },
        methods:{
            setWords(){
                this.words=[]
                let userWords = this.$store.getters.userData.words
                for(var property in userWords){
                    if(userWords.hasOwnProperty(property)){
                        let word= userWords[property]

                        let isAvailable = (word.nextShowDate instanceof Date)
                            ? word.nextShowDate <= new Date()
                            : word.nextShowDate.toDate() <= new Date()

                        if(isAvailable){
                            this.words.push({
                                orignWord:word.orignWord,
                                transWord:word.transWord,
                                type:word.type,
                                key:property,
                                showTrans:false
                            })
                        }
                    }
                }
                this.currentWord = this.words.length > 0 ? this.words[0] : null
            },
            processWord(word){
                this.$store.dispatch('PROCESS_USER_WORD', word.key)
            },
            selectWord(word){
                word.showTrans = false
                this.currentWord= word
            }
        },
        mounted(){
            this.setWords()
        },
        components:{
            OriginalWord
        }
    }
</script>

<style lang="scss" scoped>

</style>
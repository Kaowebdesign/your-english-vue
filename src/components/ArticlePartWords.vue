<template>
    <div>
        <v-container fluid grid-list-md>
            <h2 class="mt-2 mb-2">Слова для вивчення</h2>
            <v-data-iterator :items="words"  
                            :hide-actions="true"
                            content-tag="v-layout" row wrap>
                <template v-slot:item="props">
                    <v-flex  xs12 sm6 md4 lg3>
                        <v-card>
                            <v-card-title>
                                <h4>{{ props.item.orignWord }}</h4>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <v-avatar slot="activator" v-if="props.item.type == 1" color="yellow accent-4" size="10"></v-avatar>
                                    <span>Слово</span>
                                </v-tooltip>
                                <v-tooltip bottom>
                                    <v-avatar slot="activator" v-if="props.item.type == 2" color="deep-orange" size="10"></v-avatar>
                                    <span>Фразове дієслово</span>
                                </v-tooltip>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>{{props.item.transWord}}</v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn fab dark small color="primary" @click="addWord(props.item)" :disabled="checking || processing">
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                                <v-snackbar v-model="snackbar" bottom light color="error">
                                    <v-icon>warning</v-icon> {{snackbarText}}
                                </v-snackbar>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </template>
            </v-data-iterator>
        </v-container>
    </div>
</template>

<script>
    export default {
        props:{
            "data":{
                type:Object,
                default:null
            }
        },
        computed:{
            words(){
                if(!this.data) return []

                let words = []

                for(var property in this.data){
                    if(this.data.hasOwnProperty(property)){
                        let word = this.data[property]
                        word.key=property
                        words.push(word)
                    }
                }
                return words
            },
            processing(){
                return this.$store.getters.getProcessing
            }
        },
        data(){
            return{
                  rowsPerPageItems: [4, 8, 12],
                    pagination: {
                        rowsPerPage: 4
                    },
                    snackbar:false,
                    snackbarText:null,
                    cheking:false
            }
        },
         methods:{
            addWord(unoWord){
                this.checking = true
                let userWords = this.$store.getters.userData.words
                let wordAdded = userWords[unoWord.key]

                if(wordAdded) {
                    this.snackbar=true
                    this.snackbarText = 'Ви вже додали це слово'
                }
                else if(Object.keys(userWords).length > 100){
                    this.snackbar=true
                    this.snackbarText = 'Ви вже додали дуже багато слів'
                }else{
                    this.$store.dispatch('ADD_USER_WORD', unoWord)
                }
                this.checking = false
            }
        } 
    }
</script>

<style lang="scss" scoped>

</style>
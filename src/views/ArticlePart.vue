<template>
    <v-container grid-list-md  v-if="part">
        <v-layout row wrap>
            <v-flex xs12 v-if="finishedDate">
                <v-card>
                    <v-card-title primary-title>
                        <div class="headline">Ви завершили вивченя цієї частини: {{finishedDate | formatDate}}</div>
                    </v-card-title>
                     <v-card-actions> 
                        <span>Моя оцінка </span>
                        <v-rating v-model="printRating" color="success" readonly large></v-rating>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 >
                <article-part-content :part="part"></article-part-content>
            </v-flex>
             <v-flex xs12>
                <article-part-words :words="part.words"></article-part-words>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
                <v-btn v-if="!finishedDate" slot="activator" color="success" dark @click="finishDialog = true">
                    <v-icon>check</v-icon> Завершити вивчення
                </v-btn>
                <v-dialog v-model="finishDialog" persistent max-width="600px">
                    <v-card>
                        <v-card-title primary-title>
                            <div class="headline">Вітаємо з завершенням цієї частини</div>
                        </v-card-title>
                        <v-card-text> 
                            <span>Моя оцінка </span>
                            <v-rating v-model="rating" color="success" large></v-rating>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" dark flat @click.native="finishDialog = false">
                                <v-icon>close</v-icon> Закрити
                            </v-btn> 
                            <v-btn color="success" dark flat @click.native="finishWork">
                                <v-icon>check</v-icon> Завершити
                            </v-btn> 
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import ArticlePartContent from '../components/ArticlePartContent'
    import ArticlePartWords from '../components/ArticlePartWords'
    export default {
        props:{
            'articleId':{
                type:String,
                required:true
            },
            'partId':{
                type:String,
                required:true
            }
        },
        data(){
            return{
                part:null,
                finishDialog:false,
                rating:0,
                showBtnDialog:true
            }
        },
        computed:{ 
            article(){
                return this.$store.getters.userData.articles[this.articleId]
            },
            finishedDate(){
                if(this.article && this.article.parts[this.partId])
                    return this.article.parts[this.partId].finishedDate
                else return null
            },
            printRating(){
                 if(this.article && this.article.parts[this.partId])
                    return this.article.parts[this.partId].rating
                return 0
            }
        },
        created(){
            Vue.$db.collection('articleParts')
                .where('articleId','==',this.articleId)
                .where('articlePartId','==',this.partId)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(s => {
                        this.part = s.data()
                    })
                })
                .then(()=>{
                    this.$store.dispatch('UPDATE_USER_ARTICLE_PART',{articleId: this.articleId, partId: this.partId})
                })
                .catch(error => console.log('Ошибка',error))
        },
        methods:{
            finishWork(){
                this.$store.dispatch('FINISH_USER_ARTICLE_PART',{articleId:this.articleId, partId: this.partId, rating:this.rating})
                this.finishDialog = false
            }
        },
        components:{
            ArticlePartContent,
            ArticlePartWords
        }
    }
</script>

<style lang="scss" scoped>

</style>
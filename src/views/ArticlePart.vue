<template>
    <v-container grid-list-md  v-if="part">
        <v-layout row wrap>
            <v-flex xs12 >
                <article-part-content :part="part"></article-part-content>
            </v-flex>
             <v-flex xs12>
                <article-part-words :words="part.words"></article-part-words>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
                <v-dialog v-model="finishDialog" persistent max-width="50%">
                    <v-btn v-if="!finishedDate" slot="activator" color="success" dark @click="finishDialog = true">
                        <v-icon>check</v-icon>
                    </v-btn>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="headline">Вітаємо з завершенням цієї частини</div>
                        </v-card-title>
                        <v-card-text>
                            <span>Моя оцінка </span>
                            <v-rating v-model="rating" color="success" large></v-rating>
                        </v-card-text>
                        <v-card-actions>
                            
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
                rating:0
            }
        },
        computed:{ 
            finishedDate(){
                return this.$store.getters.userData.articles[this.articleId].parts[this.partId].finishedDate
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
                    this.$store.dispatch('UPDATA_USER_ARTICLE_PART',{articleId:this.articleId, partId: this.partId})
                })
                .catch(error => console.log(error))
        },
        components:{
            ArticlePartContent,
            ArticlePartWords
        }
    }
</script>

<style lang="scss" scoped>

</style>
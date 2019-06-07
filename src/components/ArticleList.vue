<template>
   <v-container grid-list-md>
    <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
            <v-container fluid>
                <v-layout row>
                    <v-flex xs8 md9>
                        <v-text-field label="Пошук" v-model="searchArticle">
                        </v-text-field>
                    </v-flex>
                     <v-flex xs4 md3>
                        <v-select label="Рівень" :items="levels" v-model="level" multiple>
                        </v-select>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
        <div v-for="article in filterArticles" :key="article.id">
            <article-item :article="article"></article-item>
        </div>
    </v-layout>
   </v-container>
</template>

<script>
    import ArticleItem from './ArticleItem'
    export default {
            props:{
                "myArticles":{
                    type:Boolean,
                    default:false
                }
            },
            data(){
                return{
                    searchArticle:null,
                    level:[],
                    levels:['A1','A2','B1','B2','C1','C2']
                }
            },
            computed:{
                articles(){
                    return this.$store.getters.getArticle
                },
                filterArticles(){
                    let articles = this.articles;
                    if(this.myArticles){
                        articles=articles.filter(mas => this.$store.getters.userData.articles[mas.id])
                    }
                    if(this.searchArticle)
                        articles=articles.filter(mas => 
                        mas.title.toLowerCase().indexOf(this.searchArticle.toLowerCase())>=0 ||
                        mas.description.toLowerCase().indexOf(this.searchArticle.toLowerCase())>=0)
                    if(this.level.length)
                        articles=articles.filter(mas => this.level.filter(val => mas.level.indexOf(val) !== -1).length > 0)
                    return articles
                }
            },
            components:{
                ArticleItem
            }
    }
</script>

<style lang="scss" scoped>

</style>
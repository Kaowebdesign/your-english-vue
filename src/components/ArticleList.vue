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
        <v-flex v-for="article in filterArticles" :key="article.id" xs12 sm10 md8 offset-sm1 offset-md2>
            <article-item :article="article"></article-item>
        </v-flex>
    </v-layout>
   </v-container>
</template>

<script>
    import ArticleItem from './ArticleItem'
    export default {
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
                    let article = this.articles;
                    if(this.searchArticle)
                        article=article.filter(mas => mas.title.toLowerCase().indexOf(this.searchArticle.toLowerCase())>=0)
                    if(this.level.length)
                        article=article.filter(mas => this.level.filter(val => mas.level.indexOf(val) !== -1).length > 0)
                    return article
                }
            },
            components:{
                ArticleItem
            }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <v-container grid-list-md v-if="article">
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <article-details :article="article"></article-details>
            </v-flex>
            <v-flex xs10 offset-xs1>
                <h2 class="pa-3 headline text-xs-center">Відео складається з наступних частин</h2>
            </v-flex>
            <v-flex v-for="part in article.parts" :key="part.id" xs10 offset-xs1>
                <article-part-item :part="part" :articleId="article.id"></article-part-item>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import ArticleDetails from '../components/ArticleDetails'
    import ArticlePartItem from '../components/ArticlePartItem'
    export default {
        props:{
            'id':{
                type:String,
                required:true
            }
        },
        computed:{
            article(){
                return this.$store.getters.getArticle.find(el => el.id==this.id)
            }
        },
        components:{
            ArticleDetails,
            ArticlePartItem
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <v-container grid-list-md  v-if="part">
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm-1>
                <article-part-content :part="part"></article-part-content>
            </v-flex>
             <v-flex xs12 sm10 offset-sm-1>
                <!-- <article-part-words :words="part.words"></article-part-words> -->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticlePartContent from '../components/ArticlePartContent'
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
        computed:{ 
            part(){
                return this.$store.getters.getParts.find(b => b.articleId == this.articleId && b.articlePartId == this.partId)
            }
        },
        components:{
            ArticlePartContent
        }
    }
</script>

<style lang="scss" scoped>

</style>
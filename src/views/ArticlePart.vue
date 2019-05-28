<template>
    <v-container grid-list-md  v-if="part">
        <v-layout row wrap>
            <v-flex xs12 >
                <article-part-content :part="part"></article-part-content>
            </v-flex>
             <v-flex xs12>
                <article-part-words :words="part.words"></article-part-words>
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
                part:null
            }
        },
        computed:{ 
            // part(){
            //     return this.$store.getters.getParts.find(b => b.articleId == this.articleId && b.articlePartId == this.partId)
            // }
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
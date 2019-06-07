<template>
    <div>
        <v-card color="cyan lighten-1" class="white--text mb-3">
            <v-card-title primary-title class="headline pb-0">{{part.title}}</v-card-title>
            <v-card-actions>
                <div v-if="finishedDate">
                    <v-icon dark> check</v-icon>
                    Частина прочитана: {{ finishedDate | formatDate}}
                </div>
                <v-spacer></v-spacer> 
                <v-btn flat dark class="cyan darken-4" v-if="isUserArticleLoaded" :to="{name:'articlePart',params:{articleId:articleId,partId:part.id}}">Відкрити</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props:{
            "part":{
                type:Object,
                required:true
            },
            "articleId":{
                required:true
            }
        },
         computed:{
            ...mapGetters(['isUserAuth','userData','getProcessing']),
            isUserArticleLoaded(){
                return this.isUserAuth && !this.getProcessing && !!this.userData.articles[this.articleId]
            },
            finishedDate(){
                if(!this.isUserArticleLoaded) return false
                let article = this.userData.articles[this.articleId]
                if( article && article.parts[this.part.id])
                    return article.parts[this.part.id].finishedDate
                return null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-card__title--primary{
         @media only screen and (max-width:768px) {
            padding-top: 5px !important;
        }
    }
</style>
<template>
    <div>
        <v-card color="accent" class="white--text">
            <v-card-title primary-title class="headline">{{part.title}}</v-card-title>
            <v-card-title primary-title class="headline">{{part.id}}</v-card-title>
            <v-card-actions>
                
                <div v-if="finishedDate">
                    <v-icon dark> check</v-icon>
                    Частина прочитана: {{ finishedDate | formatDate}}
                </div>
                <v-spacer></v-spacer> 
                <v-btn flat class="primary" v-if="isUserArticleLoaded" :to="{name:'articlePart',params:{articleId:articleId,partId:part.id}}">Відкрити</v-btn>
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

</style>
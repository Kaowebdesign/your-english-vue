<template>
    <v-card color="cyan lighten-1" class="white--text articlesDescCard">
        <v-container fluid class="articleDescCont">
            <v-layout row class="articlesDescWrap">
                <v-flex xs12 md3>
                    <v-card-media :src="article.imageUrl" class="articlesDescImg">
                    </v-card-media>
                </v-flex>
                <v-flex xs12 md9>
                    <v-card-title>
                        <div>
                            <div><h2>{{article.title}}</h2></div>
                            <div><p>{{article.description}}</p></div>
                            <div><p>Рівень: {{getArticleLevel(article.level)}} , {{article.parts.length}} частей</p> </div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <!-- <v-rating v-model="article.rating" color="yellow" readonly dense half-increments>
                        </v-rating> -->
                        <v-spacer></v-spacer>
                        <v-btn class="cyan darken-4" dark flat v-if="canLoadArticle(article.id)" @click="loadArticle(article.id)">Завантажити</v-btn>
                        <div v-if="getUserDataArticle(article.id)">
                            <v-icon color="white">work_outline</v-icon>
                            Книга скачана {{getArticleAddedDate(article.id) | formatDate}}
                        </div>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import * as articleHelper from '../helpers/article'
    import {mapGetters} from 'vuex'
    export default {
        props:{
            "article":{
                type: Object,
                required:true
            }
        },
        computed:{
            ...mapGetters(['isUserAuth','userData','getProcessing']),
        },
        methods:{
            getArticleLevel:articleHelper.getLevel,
            canLoadArticle(articleId){
                let article = this.getUserDataArticle(articleId)
                return this.isUserAuth && !this.getProcessing && !article
            },
            getUserDataArticle(articleId){
                return this.userData.articles[articleId]
            },
            loadArticle(articleId){
                this.$store.dispatch('ADD_USER_ARTICLE',articleId)
            },
            getArticleAddedDate(articleId){
                let article = this.getUserDataArticle(articleId)
                return article.addedDate
            }
        }
    }
</script>

<style lang="scss" scoped>
    .articlesDescWrap{
         @media only screen and (max-width:768px) {
            display: flex;
            flex-direction: column !important;
        }
    }
    .articlesDescCard{
        @media only screen and (max-width:768px) {
            max-width: 300px;
            margin:0 auto;
        }
    }
    .articlesDescImg{
        @media only screen and (max-width:768px) {
            max-height: 350px;
        }
    }
    .articleDescCont{
        @media only screen and (max-width:768px) {
            padding: 5px;
        }
    }
</style>
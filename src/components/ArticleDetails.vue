<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <v-layout row>
                <v-flex xs4 md3>
                    <v-card-media :src="article.imageUrl">
                    </v-card-media>
                </v-flex>
                <v-flex xs8 md9>
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
                        <v-btn class="primary" flat v-if="canLoadArticle(article.id)" @click="loadArticle">Додати</v-btn>
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
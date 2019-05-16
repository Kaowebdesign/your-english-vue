<template>
   <v-container grid-list-md>
    <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
            <v-container fluid>
                <v-layout row>
                    <v-flex>
                        <v-text-field label="Пошук" v-model="searchArticle">
                        </v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
        <v-flex v-for="article in filterArticles" :key="article.id" xs12 sm10 md8 offset-sm1 offset-md2>
            <v-card color="info" class="white--text">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs4 md3>
                               <v-card-media src="https://i.io.ua/img_su/large/0093/95/00939573_n4.jpeg?r=492804934">
                               </v-card-media>
                            </v-flex>
                            <v-flex xs8 md9>
                                <v-card-title>
                                    <div>
                                        <div><h2>{{article.title}}</h2></div>
                                        <div><p>{{article.description}}</p></div>
                                        <div><p>Рівень: {{getLevel(article.level)}} , {{article.parts}} частей</p> </div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-rating v-model="article.rating" color="yellow" readonly dense half-increments>
                                    </v-rating>
                                    <v-spacer></v-spacer>
                                    <v-btn class="primary" flat>Читать</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
            </v-card>
        </v-flex>
    </v-layout>
   </v-container>
</template>

<script>
    export default {
            computed:{
                articles(){
                    return this.$store.getters.getArticle
                },
                filterArticles(){

                }
            },
            methods:{
                getLevel(level){
                    return level.join('/');
                }
            }
    }
</script>

<style lang="scss" scoped>

</style>
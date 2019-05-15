<template>
   <v-container>
    <v-layout row wrap>
        <v-flex v-for="article in articles" :key="article.id" xs12 sm10 md8 offset-sm1 offset-md2>
            <v-card color="info" class="white--text">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs4 md3>
                               <v-card-media src="https://i.io.ua/img_su/large/0093/95/00939573_n4.jpeg?r=492804934">
                               </v-card-media>
                            </v-flex>
                            <v-flex xs8 md9>
                                <v-card-title>
                                </v-card-title>
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
                }
            }
    }
</script>

<style lang="scss" scoped>

</style>
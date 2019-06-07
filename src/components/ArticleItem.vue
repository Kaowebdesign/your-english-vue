<template>
            <!-- <v-flex xs4 md3>
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
                    <v-spacer></v-spacer>
                    <v-btn class="primary" flat :to="{name:'article', params:{id:article.id}}">Читати</v-btn>
                </v-card-actions>
            </v-flex> -->
                <v-card class="mr-4">
                    <v-card-media :src="article.imageUrl" height="300px"></v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{article.title}}</h3>
                        <div> <p>{{article.description}}</p> </div>
                        <div><p>Рівень: {{getArticleLevel(article.level)}} , {{article.parts.length}} частей</p> </div>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary" flat :to="{name:'article', params:{id:article.id}}">Читати</v-btn>
                    </v-card-actions>
                </v-card>
</template>

<script>
    import * as articleHelper from '../helpers/article'
    export default {
        props:{
            "article":{
                type:Object,
                required:true
            }
        },
        methods:{
            getArticleLevel:articleHelper.getLevel
        }
    }
</script>

<style lang="scss" scoped>

</style>
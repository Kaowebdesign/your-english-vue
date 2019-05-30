<template>
    <div>
        <v-card color="accent" class="white--text">
            <v-card-title primary-title class="headline">{{part.title}}</v-card-title>
            <v-card-title primary-title class="headline">{{part.id}}</v-card-title>
            <v-card-actions>
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
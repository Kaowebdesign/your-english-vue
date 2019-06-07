<template>
    <v-card class="ma-4 bookCard">
        <v-card-media :src="article.imageUrl" height="450px"></v-card-media>
        <div class="bookCard__titleWrap">
            <v-card-title>
                <div>
                    <div class="bookCard__captionWrap">
                        <h3 class="display-1 mb-2 bookCard__text">{{article.title}}</h3>
                    </div>
                    <div><p class="bookCard__text">{{article.description}}</p></div>
                    <div><p class="bookCard__text bookCard__text_level">Рівень: {{getArticleLevel(article.level)}} , {{article.parts.length}} частин</p> </div>
                </div>
            </v-card-title>
            <div class="bookCard__btn">
                <v-card-actions>
                    <v-btn class="cyan darken-4" dark :to="{name:'article', params:{id:article.id}}">
                        <v-icon class="pr-2">visibility</v-icon>
                        Читати</v-btn>
                </v-card-actions> 
            </div>
        </div>
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
    .bookCard{
        position: relative;
        width:320px;
        cursor: pointer;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.45);
        &:hover .bookCard__titleWrap{
            opacity: 1;
        }
    }
    .bookCard__titleWrap{
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,.6);
        padding: 10px;
        transition: .5s;
        opacity: 0;
    }
    .bookCard__text{
        color:#fff;
        &_level{
            margin-top: 30px;
        }
    }
    .bookCard__captionWrap{
        position: absolute;
        width:100%;
        left:0;
        top:20px;
        text-align:center;
    }
    .bookCard__btn{
        position:absolute;
        bottom: 20px;
    }
</style>
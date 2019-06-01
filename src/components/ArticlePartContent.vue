<template>
    <v-card class="pa-3">
        <div>
            <div class="display-1 text-xs-center">{{part.articleTitle}}</div>
            <div class="headline text-xs-center">{{part.partTitle}}</div>
        </div>  
        <div class="text-xs-center mt-2 mb-2">
            <youtube :video-id="part.youtube_id" :player-width="playerWidth"></youtube>
        </div>
        <div class="mt-2">
            <v-tabs v-model="tabMode" slider-color="black">
                <v-tab :key="'englishText'" ripple>
                    English
                </v-tab>
                <v-tab :key="'doubleText'" ripple>
                    With translate
                </v-tab>
                <v-tab-item :key="'englishText'" class="pt-2">
                    <div v-for="(paragraph, i) in part.content" :key="`pa${i}`" class="mb-3 mt-3">
                        <div v-for="(sentence, j) in paragraph.sentences" :key="`pa${i}sen${j}`" class="sentences">
                            <p class="ma-0"  :style="textStyle">
                                {{sentence.orign}}
                                <v-icon :size="textStyle" @click.prevent="toggleVisible(i,j)">text_rotation_none</v-icon>
                            </p>
                            <p v-if="getVisibleFlag(i,j).value" class="green--text ma-0"  :style="textStyle">{{sentence.trans}}</p>
                        </div>
                    </div>
                </v-tab-item>
                <v-tab-item :key="'doubleText'">
                    <v-container>
                        <v-layout row wrap v-for="(paragraph, i) in part.content" :key="`pa2${i}`">
                            <v-flex xs6>
                                <div v-for="(sentence, j) in paragraph.sentences" :key="`pa2${i}sen2${j}_orig`" class="sentences" >
                                    <p class="ma-0" :style="textStyle">
                                        {{sentence.orign}}
                                    </p>
                                </div>
                            </v-flex>
                            <v-flex xs6>
                                <div v-for="(sentence, j) in paragraph.sentences" :key="`pa2${i}sen2${j}_trans`" class="sentences">
                                    <p class="ma-0"  :style="textStyle">
                                        {{sentence.trans}}
                                    </p>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-tab-item>
            </v-tabs>
        </div>
    </v-card>
</template>

<script>
    export default {
        props:{
            "part":{
                type:Object,
                required:true
            }
        },
        data(){
            return{
                tabMode:'englishText',
                visibilyKeys:[],
                fontSize:18
            }
        },
        computed:{
             playerWidth(){
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '220px'
                    case 'sm': return '400px'
                    case 'md': return '500px'
                    case 'lg': return '600px'
                    case 'xl': return '800px'
                }
             },
             textStyle(){
                 return {fontSize:`${this.fontSize}px`}
             }
        },
        methods:{
            getVisibleFlag(i,j){
                return this.visibilyKeys.find(k => k.key == `${i}${j}`)
            },
            toggleVisible(i,j){
                let flag = this.getVisibleFlag(i, j)
                flag.value = !flag.value
            }
        },
        created(){
            for(var i=0; i < this.part.content.length; i++){
                 for(var j=0; j < this.part.content[i].sentences.length; j++){
                     this.visibilyKeys.push({
                         key:`${i}${j}`,
                         value:false
                     })
                 }
            }
        }
    }
</script>

<style lang="scss" scoped>
    // .sentences{
    //     display: inline-block;
    // }
</style>
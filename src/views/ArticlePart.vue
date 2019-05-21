<template>
    <v-container grid-list-md  v-if="part">
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm-1>
                <!-- Content -->
            </v-flex>
             <v-flex xs12 sm10 offset-sm-1>
                <!-- Words -->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props:{
            'articleID':{
                type:String,
                required:true
            },
            'partId':{
                type:String,
                required:true
            }
        },
        computed:{
            part(){
                let val = this.$store.getters.getParts.find(el => el.articleId == this.articleId && el.partId == this.partId)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
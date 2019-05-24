<template>
    <v-card>
        <div>
            <div class="display-1">{{part.articleTitle}}</div>
            <div class="headline">{{part.partTitle}}</div>
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
        }
    }
</script>

<style lang="scss" scoped>

</style>
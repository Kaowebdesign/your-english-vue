<template>
    <div>
        <v-card color="accent" class="white--text">
            <v-card-title primary-title class="headline">{{part.title}}</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat class="primary">Відкрити</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        props:{
            "part":{
                type:Object,
                required:true
            },
            "articleId":{
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <v-container fluid grid-list-md>
            <h2 class="mt-2 mb-2">Слова для вивчення</h2>
            <v-data-iterator :items="words"  
                            :hide-actions="true"
                            content-tag="v-layout" row wrap>
                <template v-slot:item="props">
                    <v-flex  xs12 sm6 md4 lg3>
                        <v-card>
                            <v-card-title>
                                <h4>{{ props.item.orignWord }}</h4>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>{{props.item.transWord}}</v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn fab dark small color="primary">
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </template>
            </v-data-iterator>
        </v-container>
    </div>
</template>

<script>
    export default {
        props:{
            "words":{
                type:Array,
                required:true
            }
        },
        data(){
            return{
                  rowsPerPageItems: [4, 8, 12],
                    pagination: {
                        rowsPerPage: 4
                    }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
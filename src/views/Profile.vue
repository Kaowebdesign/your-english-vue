<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                <v-tabs v-model="tabMode" slider-color="black">
                    <v-tab :key="'mydata'" ripple>
                        Мої дані
                    </v-tab>
                    <v-tab :key="'articles'" ripple>
                        Мої книги
                    </v-tab>
                    <v-tab :key="'words'" ripple>
                        Мої слова
                    </v-tab>
                    <v-tab-item :key="'mydata'" class="pt-2">
                        <user-profile-data></user-profile-data>
                    </v-tab-item>
                    <v-tab-item :key="'articles'" class="pt-2">
                    </v-tab-item>
                    <v-tab-item :key="'words'" class="pt-2">
                          <user-profile-words></user-profile-words>
                    </v-tab-item>
                </v-tabs>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import userProfileData from '../components/UserProfileData'
    import userProfileWords from '../components/UserProfileWords'
    export default {
        data(){
            return{
                tabMode:'mydata',
            }
        },
        components:{
            userProfileData,
            userProfileWords
        }
    }

</script>

<style scoped>
</style>

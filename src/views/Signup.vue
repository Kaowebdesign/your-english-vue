<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="cyan darken-2">
                <v-toolbar-title>Реєстрація</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-alert :value="error" type="warning">
                    {{error}}
                    </v-alert>
                <v-form v-model="valid">
                    <v-text-field prepend-icon="person" name="name" label="Ім'я" type="text" required v-model="name" :rules="nameRules"></v-text-field>
                    <v-text-field prepend-icon="email" name="login" label="E-mail" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                    <v-text-field id="password" prepend-icon="lock" name="Пароль" label="Пароль" type="password" required v-model="password" :rules="passwordRules"></v-text-field>
                </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="cyan darken-1" @click.prevent="signup" :disabled="processing || !valid">Зареєструватись</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        data(){
            return{
                name:null,
                email:null,
                password:null,
                valid:false,
                 nameRules:[
                    (v) => !!v || "Будь-ласка введіть ваше ім'я",
                ],
                emailRules:[
                    (v) => !!v || 'Будь-ласка введіть е-мейл',
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неправильний е-мейл'
                ],
                passwordRules:[
                    (v) => !!v || 'Будь-ласка введіть пароль',
                    (v) => (v && v.length >=6) || 'Пароль занадто короткий - має будти більше 6 символів'
                ]
            }
        },
        computed:{
            error(){
                return this.$store.getters.getError
            },
            processing(){
                return this.$store.getters.getProcessing
            },
            isUserAuth(){
                return this.$store.getters.isUserAuth
            }
        },
        watch:{
            isUserAuth(val){
                if(val === true ){
                    this.$router.push('/')
                }
            }
        },
        methods:{
            signup(){
                this.$store.dispatch('SIGNUP',{email:this.email,password:this.password,name:this.name});
            }
        }
    }

</script>

<style scoped>
</style>

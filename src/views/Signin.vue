<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="cyan darken-2">
                <v-toolbar-title>Вхід</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-alert :value="error" type="warning">
                    {{error}}
                    </v-alert>
                <v-form v-model="valid">
                    <v-text-field prepend-icon="person" name="login" label="E-mail" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                    <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required v-model="password" :rules="passwordRules"></v-text-field>
                </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="cyan darken-1" @click.prevent="signin" :disabled="processing || !valid">Увійти</v-btn>
                </v-card-actions>
            </v-card>
             <v-card class="mt-5">
                 <v-card-title class="title font-weight-light text-xs-center" ><p class="singTitle ">Не маєш акаунту?</p></v-card-title>
                 <v-card-title class="pt-0 title font-weight-light text-xs-center" ><p class="singTitle ">Зареєструйся прямо зараз!</p></v-card-title>
                 <v-card-text class="pt-0 font-weight-light text-xs-center" >
                     <v-btn dark color="cyan darken-1" :to="{name:'registration'}">Реєстрація</v-btn> 
                 </v-card-text>
                
             </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

   export default {
        data(){
            return{
                email:null,
                password:null,
                valid:false,
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
            signin(){
                this.$store.dispatch('SIGNIN',{email:this.email,password:this.password});
            }
        }
    }

</script>

<style lang="scss" scoped>
    .singTitle{
        width: 100%;
        color:#777;
        margin:0;
    }
</style>

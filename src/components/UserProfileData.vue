<template>
    <div>
        <v-card>
            <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
            ></v-img> -->

            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0"><v-icon class="mr-2">person</v-icon>{{userName}}</h3>
                <h3 class="headline mb-0"><v-icon class="mr-2">email</v-icon>{{userEmail}}</h3>
            </div>
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="650">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on">Змінити</v-btn>
                    </template> 
                    <v-card>
                        <v-card-title class="headline">Зміна ваших даних</v-card-title>
                        <v-card-text>
                            <v-form v-model="valid">
                                <v-text-field prepend-icon="person" name="login" label="E-mail" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                                <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required v-model="password" :rules="passwordRules"></v-text-field>
                            </v-form>
                            <h3>Оберіть що ви хочите змінити</h3>
                            <v-radio-group v-model="changeData">
                                <v-radio label="Імя" value="'name'" ></v-radio>
                                <v-radio label="E-mail" value="'email'" ></v-radio>
                                <v-radio label="Пароль" value="'password'" ></v-radio>
                            </v-radio-group>
                            <v-text-field v-if="changeData == 'name'" prepend-icon="person" name="newname" type="text" required v-model="newname" :rules="nameRules"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" flat @click="dialog = false">Відмини зміни</v-btn>
                        <v-btn color="green darken-1" flat @click="dialog = false">Змінити</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return{
                dialog:false,
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
            ...mapGetters(['userName','userEmail'])
        }
    }
</script>

<style lang="scss" scoped>

</style>
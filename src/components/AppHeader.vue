<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="burger" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item,i) in menuItems" :key="`mobMenuItems${i}`">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon">
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>  
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="burger = !burger" class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link to="/" tag="span" class="home-link">
                <v-toolbar-title  v-text="'your-english'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item, i) in menuItems" :key="`menuItems${i}`" :to="item.route" flat>
                    <v-icon left>{{item.icon}}</v-icon> 
                    {{item.title}}
                </v-btn>
                <v-btn flat @click.prevent="dialog=true" v-if="isUserAuth">
                    <v-icon left>exit_to_app</v-icon> 
                    Вихід
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="headline">Ви впевнені що хочете вийти?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" flat="flat" @click="dialog = false">
                        Ні
                    </v-btn>
                    <v-btn color="green darken-1" flat="flat" @click="signout">
                        Так
                    </v-btn>
                </v-card-actions>
             </v-card>
        </v-dialog>
    </div>
</template>

<script>

    export default {
         data(){
                return{
                    burger:false,
                    dialog:false
                }
            },
        computed:{
            isUserAuth(){
                return this.$store.getters.isUserAuth
            },
            menuItems(){
                return this.isUserAuth?[
                    {
                        icon:'visibility',
                        title:'Навчання',
                        route:'/articles'
                    },
                    {
                        icon:'extension',
                        title:'Словник',
                        route:'/vocabulary'
                    },
                    {
                        icon:'account_circle',
                        title:'Профіль',
                        route:'/profile'
                    }
                    ]:[
                    {
                        icon:'input',
                        title:'Вхід',
                        route:'/signin'
                    },
                    {
                        icon:'lock_open',
                        title:'Реєстрація',
                        route:'/signup'
                    }
                ]
            }
        },
        methods:{
            signout(){
                this.dialog=false
                this.$store.dispatch('SIGNOUT')
                this.$router.push('/')
            }
        }
    }

</script>

<style scoped>
    .home-link{
        cursor: pointer;
        transition: .5s ease-out;
    }
    .home-link:hover{
        opacity: .7;
    }
</style>

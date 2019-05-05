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
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>

    export default {
         data(){
                return{
                    burger:false
                }
            },
        computed:{
            menuItems(){
                return [
                    {
                        icon:'visibility',
                        title:'Читать',
                        route:'/articles'
                    },
                    {
                        icon:'extension',
                        title:'Словарь',
                        route:'/vocabulary'
                    },
                    {
                        icon:'account_circle',
                        title:'Профиль',
                        route:'/profile'
                    },
                    {
                        icon:'exit_to_app',
                        title:'Выйти',
                        route:'/logout'
                    },
                    {
                        icon:'input',
                        title:'Войти',
                        route:'/signin'
                    },
                    {
                        icon:'lock_open',
                        title:'Регистрация',
                        route:'/signup'
                    }
                ]
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

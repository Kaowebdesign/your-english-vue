import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from '@/components/Articles'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Vocabulary from '@/components/Vocabulary'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles
        },
        {
            path: '/vocabulary',
            name: 'vocabulary',
            component: Vocabulary
        },
        {
            path: '/profile',
            name: 'account',
            component: Profile
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },
        {
            path: '/signup',
            name: 'registration',
            component: Signup
        }
    ],
    mode: 'history'
})
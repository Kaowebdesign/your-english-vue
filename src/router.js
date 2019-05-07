import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import Profile from './views/Profile.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Vocabulary from './views/Vocabulary.vue'

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
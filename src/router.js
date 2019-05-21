import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import Article from './views/Article.vue'
import ArticlePart from './views/ArticlePart.vue'
import Profile from './views/Profile.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Vocabulary from './views/Vocabulary.vue'
import Store from './store'

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
            component: Articles,
            beforeEnter: AuthGuard
        },
        {
            path: '/article/:id',
            name: 'article',
            props: true,
            component: Article
        },
        {
            path: '/article/:articleId/part/:partId',
            name: 'articlePart',
            props: true,
            component: ArticlePart
        },
        {
            path: '/vocabulary',
            name: 'vocabulary',
            component: Vocabulary,
            beforeEnter: AuthGuard
        },
        {
            path: '/profile',
            name: 'account',
            component: Profile,
            beforeEnter: AuthGuard
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

function AuthGuard(from, to, next) {
    if (Store.getters.isUserAuth)
        next()
    else
        next('/signin')
}
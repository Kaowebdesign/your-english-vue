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

let router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles,
            meta: { authRequired: true }
        },
        {
            path: '/article/:id',
            name: 'article',
            props: true,
            component: Article,
            meta: { authRequired: true }
        },
        {
            path: '/article/:articleId/part/:partId',
            name: 'articlePart',
            props: true,
            component: ArticlePart,
            meta: { authRequired: true }
        },
        {
            path: '/profile',
            name: 'account',
            component: Profile,
            meta: { authRequired: true }
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

router.beforeEach((to, from, next) => {
    Store.dispatch('INIT_AUTH')
        .then(user => {
            if (to.matched.some(route => route.meta.authRequired)) {
                if (user)
                    next()
                else
                    next('/signin')
            } else {
                next()
            }
        })
})


export default router
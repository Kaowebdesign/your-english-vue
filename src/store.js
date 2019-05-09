import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import commonModule from './store/common'
import userModule from './store/user'


Vue.use(Vuetify)

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        commonModule,
        userModule
    }
})
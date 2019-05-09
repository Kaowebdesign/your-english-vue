import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import Vuetify from 'vuetify';

Vue.use(Vuetify)

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        let vm = this
        firebase.auth().onAuthStateChanged(function(user) {
            vm.$store.dispatch('STATE_CHANGED', user)
        });
    }
}).$mount('#app')
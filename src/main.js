import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'
import "firebase/firestore"


Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

db.settings({
    timestampsInSnapshots: true
});

Vue.$db = db

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
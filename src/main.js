import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import Vuetify from 'vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'
import "firebase/firestore"
import FormatDate from './filters/formatDate'


Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

Vue.filter('formatDate', FormatDate)

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

db.settings({
    timestampsInSnapshots: true
});

Vue.$db = db



new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        let vm = this
        firebase.auth().onAuthStateChanged(function(user) {
            vm.$store.dispatch('STATE_CHANGED', user)
        });
        this.$store.dispatch('LOAD_ARTICLES')
    }
}).$mount('#app')
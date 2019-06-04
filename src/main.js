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
import { setupBus } from './infostructure/eventBus'


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

setupBus()

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('LOAD_ARTICLES')
    }
}).$mount('#app')
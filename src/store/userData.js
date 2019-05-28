import Vue from 'vue'

let defaultUserData = {
    articles: {},
    words: {}
}

export default {
    state: {
        userData: defaultUserData
    },
    mutations: {

    },
    actions: {
        LOAD_USER_DATA({ commit }, payload) {
            commit('SET_PROCESSING', true)
            let userDataRef = Vue.$db.collection('userData').doc(payload)
            userDataRef.get()
                .then((data) => {
                    let userData = data.exist ? data.data() : defaultUserData
                    if (!userData.articles)
                        userData.articles = {}
                })
        }
    },
    getters: {
        userData: (state) => state.userData
    }
}
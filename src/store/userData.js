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
        SET_USER_DATA(state, payload) {
            state.userData = payload
        },
        ADD_USER_ARTICLE(state, payload) {
            Vue.set(state.userData.articles, payload.articleId, payload.article)
        }
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
                    commit('SET_USER_DATA', userData)
                    commit('SET_PROCESSING', true)
                })
                .catch(() => {
                    commit('SET_PROCESSING', true)
                })
        },
        ADD_USER_ARTICLE({ commit, getters }, payload) {
            commit('SET_PROCESSING', true)
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let article = {
                addedDate: new Date(),
                parts: {}
            }
            userDataRef.set({
                    articles: {
                        [payload]: article
                    }
                }, { merge: true })
                .then(() => {
                    commit('ADD_USER_ARTICLE', { articeId: payload, article: article })
                })
        }
    },
    getters: {
        userData: (state) => state.userData
    }
}
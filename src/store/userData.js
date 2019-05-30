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
                    let userData = data.exists ? data.data() : defaultUserData
                    if (!userData.articles)
                        userData.articles = {}

                    for (var key in userData.articles) {
                        if (userData.articles.hasOwnProperty(key))
                            userData.articles[key].addedDate = userData.articles[key].addedDate.toDate()
                    }

                    commit('SET_USER_DATA', userData)
                    commit('SET_PROCESSING', false)
                })
                .catch(() => {
                    commit('SET_PROCESSING', false)
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
                    commit('ADD_USER_ARTICLE', { articleId: payload, article: article })
                })
        }
    },
    getters: {
        userData: (state) => state.userData
    }
}
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
            Vue.set(state, 'userData', payload)
        },
        ADD_USER_ARTICLE(state, payload) {
            Vue.set(state.userData.articles, payload.articleId, payload.article)
        },
        ADD_USER_ARTICLE_PART(state, payload) {
            Vue.set(state.userData.articles[payload.articleId].parts, payload.partId, { addedDate: payload.timestamp })
        },
        UPDATE_USER_ARTICLE_PART_LAST_OPEN(state, payload) {
            Vue.set(state.userData.articles[payload.articleId].parts[payload.partId], 'lastOpen', payload.timestamp)
        },
        UPDATE_USER_ARTICLE_PART_FINISHED(state, payload) {
            Vue.set(state.userData.articles[payload.articleId].parts[payload.partId], 'finishedDate', payload.timestamp)
            Vue.set(state.userData.articles[payload.articleId].parts[payload.partId], 'rating', payload.rating)
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

                    if (!userData.words)
                        userData.words = {}

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
                    commit('SET_PROCESSING', false)
                })
                .catch(() => {
                    commit('SET_PROCESSING', false)
                })
        },
        ADD_USER_WORD({ commit, getters }, payload) {
            commit('SET_PROCESSING', true)
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let word = {
                orignWord: payload.orignWord,
                transWord: payload.transWord,
                type: payload.type,
                addedDate: new Date(),
                bucket: 1,
                nextShowDate: new Date()
            }
            userDataRef.set({
                    articles: {
                        [payload]: article
                    }
                }, { merge: true })
                .then(() => {
                    commit('ADD_USER_ARTICLE', { articleId: payload, article: article })
                    commit('SET_PROCESSING', false)
                })
                .catch(() => {
                    commit('SET_PROCESSING', false)
                })
        },
        UPDATE_USER_ARTICLE_PART({ commit, getters }, payload) {
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let timestamp = new Date()
            if (!getters.userData.articles[payload.articleId].parts[payload.partId]) {
                userDataRef.update({
                        [`articles.${payload.articleId}.parts.${payload.partId}.addedDate`]: timestamp
                    })
                    .then(() => commit('ADD_USER_ARTICLE_PART', { articleId: payload.articleId, partId: payload.partId, timestamp: timestamp }))
            }
            userDataRef.update({
                    [`articles.${payload.articleId}.parts.${payload.partId}.lastOpen`]: timestamp
                })
                .then(() => commit('UPDATE_USER_ARTICLE_PART_LAST_OPEN', { articleId: payload.articleId, partId: payload.partId, timestamp: timestamp }))
        },
        FINISH_USER_ARTICLE_PART({ commit, getters }, payload) {
            let userDataRef = Vue.$db.collection('userData').doc(getters.userId)
            let timestamp = new Date()

            userDataRef.update({
                    [`articles.${payload.articleId}.parts.${payload.partId}.finishedDate`]: timestamp,
                    [`articles.${payload.articleId}.parts.${payload.partId}.rating`]: payload.rating
                })
                .then(() => commit('UPDATE_USER_ARTICLE_PART_FINISHED', { articleId: payload.articleId, partId: payload.partId, timestamp: timestamp, rating: payload.rating }))
        }
    },
    getters: {
        userData: (state) => state.userData
    }
}
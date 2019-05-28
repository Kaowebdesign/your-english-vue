import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuth: false,
            userId: null
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuth = true
            state.user.userId = payload
        },
        UNSET_USER(state) {
            state.user = {
                isAuth: false,
                userId: null
            }
        }
    },
    actions: {
        SIGNUP({ commit }, payload) {
            commit('SET_PROCESSING', true)
            commit('CLEAN_ERROR')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('SET_PROCESSING', false)
                })
                .catch(function(error) {
                    commit('SET_PROCESSING', false)
                    commit('SET_ERROR', error.message)
                });
        },
        SIGNIN({ commit }, payload) {
            commit('SET_PROCESSING', true)
            commit('CLEAN_ERROR')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    commit('SET_PROCESSING', false)
                    commit('LOAD_USER_DATA', payload.uid)
                })
                .catch(function(error) {
                    commit('SET_PROCESSING', false)
                    commit('SET_ERROR', error.message)
                });
        },
        SIGNOUT() {
            firebase.auth().signOut()
        },
        STATE_CHANGED({ commit }, payload) {
            if (payload) {
                commit("SET_USER", payload.uid)
            } else {
                commit("UNSET_USER")
            }
        }
    },
    getters: {
        userId: (state) => state.userId,
        isUserAuth: (state) => state.user.isAuth
    }
}
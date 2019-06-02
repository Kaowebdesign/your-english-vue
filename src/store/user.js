import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuth: false,
            uid: null,
            email: null,
            name: null
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuth = true
            state.user.uid = payload.uid
            state.user.email = payload.email
        },
        SET_USER_NAME(state, payload) {
            state.user.name = payload
        },
        UNSET_USER(state) {
            state.user = {
                isAuth: false,
                uid: null
            }
        }
    },
    actions: {
        SIGNUP({ commit }, payload) {
            commit('SET_PROCESSING', true)
            commit('CLEAN_ERROR')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    firebase.auth().currentUser.updateProfile({ displayName: payload.name })
                        .then(() => commit('SET_USER_NAME', payload.name))
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
                })
                .catch(function(error) {
                    commit('SET_PROCESSING', false)
                    commit('SET_ERROR', error.message)
                });
        },
        SIGNOUT() {
            firebase.auth().signOut()
        },
        STATE_CHANGED({ commit, dispatch }, payload) {
            if (payload) {
                commit("SET_USER", { uid: payload.uid, email: payload.email })
                commit("SET_USER_NAME", payload.displayName)
                dispatch("LOAD_USER_DATA", payload.uid)
            } else {
                commit("UNSET_USER")
            }
        }
    },
    getters: {
        userId: (state) => state.user.uid,
        userName: (state) => state.user.name,
        userEmail: (state) => state.user.email,
        isUserAuth: (state) => state.user.isAuth
    }
}
export default {
    state: {
        proces: false,
        error: null
    },
    mutations: {
        SET_PROCESSING(state, payload) {
            state.proces = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        CLEAN_ERROR(state) {
            state.error = null
        }
    },
    actions: {

    },
    getters: {
        getProcessing: (state) => state.proces,
        getError: (state) => state.error
    }
}
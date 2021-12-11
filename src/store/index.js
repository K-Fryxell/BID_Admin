import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: "",
        isLoggedIn: false,
    },
    mutations: {
        onAuthStateChanged(state, user) {
        state.user = user
        },
        onUserLoginStatusChanged(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn
        }
    },
    actions: {
        logOut(context) {
        context.commit('onUserLoginStatusChanged', false)
        }
    },
    modules: {
    },
    getters: {
        user(state) {
        return state.user
        },
        isLoggedIn(state) {
        return state.isLoggedIn
        }
    },
    plugins: [createPersistedState(
        {
        key: 'vuex',

        // 管理対象のステートを指定。
        paths: [
            'isLoggedIn',
            'user',
        ],

        // ストレージの種類を指定する。デフォルトではローカルストレージ
        storage: window.sessionStorage
        }
    )]
})


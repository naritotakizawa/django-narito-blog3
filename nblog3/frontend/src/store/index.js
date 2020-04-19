import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATE_POSTS} from "./mutation-types"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        posts: {},
    },
    getters: {
        postList(state) {
            return state.posts
        },
    },
    mutations: {
        [UPDATE_POSTS](state, payload) {
            state.posts = payload
        },
    },
    actions: {
        [UPDATE_POSTS]({commit}, payload) {
            commit(UPDATE_POSTS, payload)
        },
    },
    modules: {}
})

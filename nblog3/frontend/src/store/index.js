import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATE_POSTS, UPDATE_CATEGORIES} from "./mutation-types"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        posts: {},
        categories: [],
    },
    getters: {
        getPreviousURL(state) {
            return state.posts.previous
        },

        getNextURL(state) {
            return state.posts.next
        },

        hasPrevious(state) {
            return !!state.posts.previous
        },

        hasNext(state) {
            return !!state.posts.next
        },

        postRangeFirst(state) {
            return state.posts.range_first
        },

        postRangeLast(state) {
            return state.posts.range_last
        },

        postCurrentPageNumber(state) {
            return state.posts.current_page
        },

        postCount(state) {
            return state.posts.count
        },

        postList(state) {
            return state.posts.results
        },
        categoryList(state) {
            return state.categories
        },
    },
    mutations: {
        [UPDATE_POSTS](state, payload) {
            state.posts = payload
        },
        [UPDATE_CATEGORIES](state, payload) {
            state.categories = payload
        },
    },
    actions: {
        [UPDATE_POSTS]({commit}, payload) {
            commit(UPDATE_POSTS, payload)
        },
        [UPDATE_CATEGORIES]({commit}, payload) {
            commit(UPDATE_CATEGORIES, payload)
        },
    },
    modules: {}
})

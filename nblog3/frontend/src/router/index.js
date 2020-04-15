import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '@/components/Post.vue'
import PostList from '@/components/PostList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'posts',
        component: PostList,
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Post,
        props: routes => ({
            id: Number(routes.params.id),
        })
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList.vue'
import Post from '@/components/Post.vue'

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
    routes
})

export default router
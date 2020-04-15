<template>
    <main :key="getKey" class="container">
        <p id="lead">{{postCount}}件中 {{postRangeFirst}}~{{postRangeLast}}件を一覧表示</p>
        <section>
            <router-link :to="{name: 'detail', params: {id: post.id}}" v-for="post of postList" :key="post.id"
                         class="post">
                <article>
                    <figure>
                        <img :src="post.thumbnail" :alt="post.title" class="thumbnail">
                    </figure>
                    <p class="post-category" :style="{'color': post.category.color}">{{post.category.name}}</p>
                    <h2 class="post-title">{{post.title}}</h2>
                    <p class="post-lead">{{post.lead_text}}</p>
                </article>
            </router-link>
        </section>
        <hr class="divider">
        <nav id="page">
            <router-link v-if="hasPrevious" :to="getPostPreviousURL" id="back"><img src="@/assets/back.png">
            </router-link>
            <span>Page {{postCurrentPageNumber}}</span>
            <router-link v-if="hasNext" :to="getPostNextURL" id="next"><img src="@/assets/next.png"></router-link>
        </nav>
    </main>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import {UPDATE_POSTS} from "@/store/mutation-types";

    export default {
        name: 'post-list',
        watch: {
            '$route'() {
                this.getPosts()
            }
        },
        created() {
            this.getPosts()
        },
        computed: {
            ...mapGetters([
                'postList', 'postCount', 'postRangeFirst', 'postRangeLast',
                'postCurrentPageNumber', 'hasPrevious', 'hasNext'
            ]),
            getKey() {
                return `${this.postCurrentPageNumber} ${this.$route.query.keyword} ${this.$route.query.category}`
            },
            getPostPreviousURL() {
                const query = this.$route.query
                const page = this.postCurrentPageNumber - 1
                const keyword = query.keyword || ''
                const category = query.category || ''
                return this.$router.resolve({
                    name: 'posts',
                    query: {page: page, keyword: keyword, category: category}
                }).route.fullPath
            },
            getPostNextURL() {
                const query = this.$route.query
                const page = this.postCurrentPageNumber + 1
                const keyword = query.keyword || ''
                const category = query.category || ''
                return this.$router.resolve({
                    name: 'posts',
                    query: {page: page, keyword: keyword, category: category}
                }).route.fullPath
            }
        },
        methods: {
            ...mapActions([UPDATE_POSTS]),
            getPosts() {
                let postURL = this.$httpPosts
                const params = this.$route.query
                if (params) {
                    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                    postURL += '?' + queryString
                }
                this.$http(postURL)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        this[UPDATE_POSTS](data)
                    })
            },
        }
    }
</script>

<style scoped>
    #lead {
        color: #999999;
    }

    section {
        margin-top: 80px;
    }

    .thumbnail {
        width: 100%;
        height: auto;

    }

    .post {
        text-decoration: none;
        color: #000;
        margin-bottom: 80px;
        display: block;
    }

    .post-category {
        margin-top: 25px;
        font-size: 12px;
    }

    .post-title {
        font-weight: bold;
        font-size: 14px;
        width: 100%
    }

    .post-lead {
        margin-top: 10px;
        width: 100%;
    }

    .divider {
        margin-top: 50px;
        margin-bottom: 25px;
        width: 100%;
        height: 0;
        border: solid 1px #ccc;
    }

    #page {
        color: #999;
    }

    #back {
        width: 44px;
        margin-right: 16px;
        display: inline-block;
    }

    #next {
        margin-left: 44px;
        width: 44px;
        display: inline-block;
    }


    @media (min-width: 768px) {
        section {
            display: grid;
            grid-template-columns: 320px 320px;
            column-gap: 20px;
            row-gap: 80px;
        }

        .thumbnail {
            width: 320px;
            height: 200px;
            object-fit: cover;
        }

        .post {
            margin-bottom: 0;
        }

        .post-title {
            width: 280px;
        }

        .post-lead {
            width: 280px;
        }

        .divider {
            width: 650px;
        }
    }

    @media (min-width: 1024px) {

        section {
            grid-template-columns: 480px 480px;
        }

        .thumbnail {
            width: 480px;
            height: 300px;
        }

        .post-title {
            width: 440px;
        }

        .post-lead {
            width: 440px;
        }
    }


</style>
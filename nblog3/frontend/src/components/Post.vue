<template>
    <article :key="id" class="container" v-if="post">
        <nav id="back"><a @click="goBack" title="前ページへ戻る"><img src="@/assets/back.png"></a></nav>
        <p class="post-category" :style="{'color': post.category.color}">{{post.category.name}}</p>
        <h1 class="post-title">{{post.title}}</h1>
        <p class="post-lead">{{post.lead_text}}</p>
        <hr class="divider">
        <div class="post-main" v-html="post.main_text"></div>
        <hr class="divider">
        <nav id="top"><a @click="scrollTop" title="一番上まで戻る"><img src="@/assets/ue.png"></a></nav>
    </article>
</template>

<script>
    export default {
        name: 'post',
        props: {
            id: {type: Number},
        },
        data() {
            return {
                post: null,
                hasBefore: false,
            }
        },
        beforeRouteEnter(to, from, next) {
            next(component => {
                if (from.name) {
                    component.hasBefore = true
                }
            })
        },
        mounted() {
            this.$http(`${this.$httpPosts}${this.id}/`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.post = data
                    document.title = `${data.title} - Design Note`
                    document.querySelector('meta[name="description"]').setAttribute('content', data.lead_text)
                })
        },
        methods: {
            goBack() {
                if (this.hasBefore) {
                    this.$router.go(-1)
                } else {
                    this.$router.push({name: 'posts'})
                }
            },
            scrollTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    }
</script>

<style scoped>
    #back {
        margin-bottom: 80px;
    }

    #back a {
        cursor: pointer;
        width: 44px;
        display: inline-block;
    }

    #top a {
        cursor: pointer;
        color: #999;
        display: inline-block;
        width: 44px;
    }

    .post-category {
        font-size: 12px;
    }

    .post-title {
        font-weight: bold;
        font-size: 14px;
    }

    .post-lead {
        margin-top: 10px;
    }

    .divider {
        margin-top: 80px;
        margin-bottom: 80px;
        width: 100%;
        height: 1px;
        border: none;
        background-color: #ccc;
    }

    .post-main {
        width: 100%;
        line-height: 2;
    }

    .post-main >>> p {
        margin-bottom: 4em;
    }

    .post-main >>> img {
        max-width: 100%;
        height: auto;
        box-shadow: 0 0 5px #ccc;
    }

    @media (min-width: 768px) {

        .post-title {
            width: 440px;
        }

        .post-lead {
            width: 440px;
        }

        .divider {
            width: 650px;
        }

        .post-main {
            width: 650px;
        }
    }

</style>
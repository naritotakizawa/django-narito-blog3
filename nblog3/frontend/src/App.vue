<template>
    <div id="app">
        <Header/>
        <main>
            <transition appear>
                <router-view />
            </transition>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Footer from "./components/Footer"

    export default {
        name: 'app',
        components: {Header, Footer}
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    main {
        min-height: calc(100vh - 290px);
    }

    body {
        font-family: fot-cezanne-pron, sans-serif;
        line-height: 1.5;
        font-size: 14px;
    }

    .container {
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }

    @media (min-width: 768px) {
        .container {
            width: 700px;
            padding: 0;
            margin: 0 auto;
        }
    }

    @media (min-width: 1024px) {
        .container {
            width: 980px;
        }
    }

    .v-enter-active {
        transition: opacity 1s;
    }

    .v-enter {
        opacity: 0;
    }

    .v-enter-to {
        opacity: 1;
    }

    .v-leave, .v-leave-active, .v-leave-to {
        opacity: 0;
    }

</style>
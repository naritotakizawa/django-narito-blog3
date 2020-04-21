import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = (url, opts) => fetch(url, opts)
Vue.prototype.$httpPosts = process.env.NODE_ENV === 'production' ? '/design-note/api/posts/' : 'http://127.0.0.1:8000/design-note/api/posts/'
Vue.prototype.$httpCategories = process.env.NODE_ENV === 'production' ? '/design-note/api/categories/' : 'http://127.0.0.1:8000/design-note/api/categories/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: 'UA-72333380-3',
  router
})

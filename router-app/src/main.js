import Vue from 'vue'
import store from '@/store.js'
import router from '@/router.js'
import App from '@/App.vue'

new Vue({
  el: '#app',
  store, // アプリケーションに登録
  router,
  render: h => h(App)
  // ...
})

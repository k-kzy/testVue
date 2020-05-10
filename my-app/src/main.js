import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

// eslint-disable-next-line
new Vue({
  el: '#app',
  store, // storeをローカルに登録
  render: h => h(App)
})

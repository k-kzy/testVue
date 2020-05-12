import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  // mode: 'history',
  // URL のパスと紐づくコンポーネントをマッピング
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: Product }
  ]
})

// 生成した VueRouter インスタンスをエクスポート
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  // mode: 'history',
  base: '/router-app/',
  // URL のパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product', // IDが付いていないときはリストを表示
      component: ProductList
    },
    {
      path: '/product/:id(\\d+)', // 「:id」がパラメータ 何が入ってもOK（数字のみマッチさせる正規表現）
      component: Product
    }
  ]
})


// 生成した VueRouter インスタンスをエクスポート
export default router

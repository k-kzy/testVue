<template>
  <div class="product" v-if="item" key="product">
    <h1>商品情報</h1>
    <dl class="product-table">
      <dt>レビュー名</dt><dd>{{ item.name }}</dd>
      <dt>レビュー値</dt><dd>{{ item.price }}</dd>
      <dt>レビュー詳細</dt><dd>{{ item.content }}</dd>
    </dl>
  </div>
  <div v-else key="loading">商品情報を読み込んでいます…</div>
</template>

<script>
import reviews from '@/api/reviews.js'
export default {
  props: { rid: Number },
  data() {
    return {
      item: null
    }
  },
  watch: {
    rid: {
      handler() {
        products.asyncFind(this.rid, item => {
          this.item = item
        })
      }, immediate: true
    }
  }
}
</script>

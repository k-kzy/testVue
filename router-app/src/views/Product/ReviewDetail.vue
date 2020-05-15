<template>
  <div class="review" v-if="item" key="review">
    <h1>商品情報</h1>
    <dl class="review-table">
      <dt>商品名</dt>
      <dd>{{ item.name }}</dd>
      <dt>価格</dt>
      <dd>{{ item.price }}円</dd>
      <dt>商品説明</dt>
      <dd>{{ item.content }}</dd>
    </dl>
  </div>
  <div v-else key="loading">商品情報を読み込んでいます...</div>
</template>

<script>
  import reviews from '@/api/reviews.js'
  export default {
    props: {
      rid: Number
    },
    data() {
      return {
        item: null
      }
    },
    watch: {
      rid: {
        handler() {
          reviews.asyncFind(this.rid, item => {
            this.item = item
          })
        },
        immediate: true
      }
    }
  }
</script>

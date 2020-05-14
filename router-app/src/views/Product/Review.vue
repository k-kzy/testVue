<template>
  <div class="product-list">
    <h1>レビュー一覧</h1>
    <ul>
      <li v-for="{ rid, name } in list" :key="rid">
        <router-link :to="`/product/${ id }/review/${ rid }`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import reviews from '@/api/reviews.js'
  export default {
    computed: {
      list: () => reviews.fetch()
    }
  }
</script>

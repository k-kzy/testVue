<template>
  <div class="edit-form">
    <input v-model="message">
  </div>
</template>

<script>
// eslint-disable-next-line
import store from '@/store.js'
export default {
  name: 'EditForm',
  computed: {
    message: {
      // eslint-disable-next-line
      get ()      { return this.$store.getters.message },
      // eslint-disable-next-line
      set (value) { this.$store.dispatch('doUpdate', value) }
    }
  }
}
</script>

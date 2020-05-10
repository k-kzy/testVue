<template>
  <div class="edit-form">
    <input type="text" :value="message" @input="doUpdate">
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'EditForm',
  computed: {
    message () { return this.$store.getters.message }
  },
  methods: {
    doUpdate (event) {
      // input の値を持ってディスパッチ
      // eslint-disable-next-line
      store.dispatch ('doUpdate', event.target.value)
    }
  }
}
</script>

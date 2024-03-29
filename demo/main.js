// new Vue({
//   el: '#app',
//   data: {
//     order: false,
//     list: [
//       { id: 1, name: 'りんご', price: 100 },
//       { id: 2, name: 'ばなな', price: 200 },
//       { id: 3, name: 'いちご', price: 300 }
//     ]
//   },
//   computed: {
//     sortedList: function() {
//       return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
//     }
//   }
// })

Vue.component('my-circle', {
  template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
  props: { fill: String }
})
new Vue({
  el: '#app',
  data: {
    toggle: false
  },
  computed: {
    fill: function() {
      return this.toggle ? 'lightpink' : 'skyblue'
    }
  }
})

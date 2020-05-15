import reviews from '@/api/reviews.js'
// 商品詳細用のVuexモジュール
export default {
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set(state, { detail }) {
      state.detail = detail
    },
    clear(state) {
      state.detail = {}
    }
  },
  actions: {
    load({ commit }, rid) {
      reviews.asyncFind(rid, detail => {
        commit('set', { detail })
      })
    },
    destroy({ commit }) {
      commit('clear')
    }
  }
}

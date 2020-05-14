// レビューリストの配列
const database = [
  { rid: 1, name: 'レビューA', price: 100, content: 'レビューA詳細' },
  { rid: 2, name: 'レビューB', price: 200, content: 'レビューB詳細' },
  { rid: 3, name: 'レビューC', price: 300, content: 'レビューC詳細' },
]

// インポート先で使用できるもの関数をオブジェクトとしてまとめたもの
export default {
  fetch(rid) { return database },
  find(rid) { return database.find(el => el.rid === rid) },
  asyncFind(rid, callback) {
    setTimeout(() => {
      callback(database.find(el => el.rid === rid))
    }, 1000)
  }
}

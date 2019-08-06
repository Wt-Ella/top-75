<template>
  <div>
    <h1>演示map辅助函数</h1>
    <!-- {{ count }} --- {{ c1 }} -->

    {{ count }} -- {{ msg }}
    <br>
    {{ reverseMsg }}
    <br>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  // computed: mapState({
  //   // count: function (state) {
  //   //   return state.count
  //   // }
  //   count: state => state.count,
  //   // 这一行代码，就是上面的简写
  //   c1: 'count'
  // })

  computed: {
    // 我有自己的计算属性
    // ...mapState({
    //   count: 'count'
    // })

    // count ---> this.$store.state.count
    ...mapState(['count', 'msg']),
    // getter 要生成到计算属性中
    ...mapGetters(['reverseMsg']),
  },
  methods: {
    // setCount  --->  this.$store.dispatch('setCount')
    ...mapActions(['setCount']),
    handle () {
      // this.$store.dispatch('setCount')
      this.setCount()
    },
  }
}
</script>

<style>

</style>

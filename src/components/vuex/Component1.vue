<template>
  <div>
    <h1>Vuex 快速体验</h1>
    {{ $store.state.msg }}
    {{ $store.state.count }}
    <br>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this)
  },
  methods: {
    handle () {
      // 不要直接更改state，devtools 检测不到
      // this.$store.state.count++
      // 要使用mutation 更改 state
      // 提交mutation，类似于触发事件
      this.$store.commit('setCount')
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <h1>Mutation</h1>
    {{ $store.state.count }}
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
import { SETCOUNT } from '@/store/mutation-types'
export default {
  methods: {
    handle () {
      // 提交 mutaion，并且带参数
      // this.$store.commit('setCount1', 5)

      // 提交 mutaion，并且带参数，参数是对象
      // this.$store.commit('setCount2', {
      //   n: 7
      // })

      // 对象风格的提交方式
      // this.$store.commit({
      //   type: 'setCount2',
      //   n: 8
      // })

      // mutation-types中定义的名字
      // this.$store.commit({
      //   type: SETCOUNT,
      //   n: 9
      // })

      // 演示为什么mutation必须是同步的
      // 异步的演示
      // mutation中如果异步修改状态，devtools无法实时跟踪状态的变化
      this.$store.commit({
        type: 'setCount4'
      })
    }
  }
}
</script>

<style>

</style>

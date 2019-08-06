
<template>
  <div>
    <h1>Bar {{ num }}</h1>
  </div>
</template>

<script>
import eventBus from '../eventBus'
// 注册事件
// eventBus.$on(事件名称， 事件处理函数)

export default {
  data () {
    return {
      num: 0
    }
  },
  created () {
    // 注册事件
    eventBus.$on('change', (num) => {
      this.num = num
    })
  }
}
</script>

<style>

</style>

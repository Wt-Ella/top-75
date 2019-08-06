<template>
  <div>
    <h1>Foo</h1>
    {{ count }}
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
import eventBus from '../eventBus'
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handle () {
      this.count++
      // 点击按钮的时候把foo中的count，传递给bar
      // 触发事件
      eventBus.$emit('change', this.count)
    }
  }
}
</script>

<style>

</style>

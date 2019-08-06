<template>
  <div>
    <h1>Child</h1>
    {{ count }}

    <button @click="handle">按钮</button>
  </div>
</template>

<script>
export default {
  // 接收外界传的值
  props: {
    number: {
      // 验证类型
      type: Number,
      required: true,
      default: 0
    }
  },
  created () {
    this.count = this.number
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handle () {
      this.count++
      // 自定义事件，触发事件（当合适的实际执行） 
      // 事件类似于方法，属于某个对象的
      this.$emit('changenum', this.count)

    }
  }
}
</script>

<style>

</style>

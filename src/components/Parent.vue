<template>
  <div>
    <h1>Parent {{ count }}</h1>

    <!-- 注册事件：当事件触发之后，会执行此处的函数 -->
    <child @changenum="handleChange" :number="count"></child>

    <child @changenum="count = $event" :number="count"></child>
    
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handleChange (num) {
      console.log(num)
      console.log('handleChange')
    }
  }
}
</script>

<style>

</style>

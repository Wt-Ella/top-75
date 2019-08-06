<template>
  <div>
    <h1>Child</h1>
    {{ number }}
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
  }
}
</script>

<style>

</style>

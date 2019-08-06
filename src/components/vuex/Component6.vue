<template>
  <div>
    <h1>Action</h1>

    {{ this.$store.state.count }}

    <button @click="handle">按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    handle () {
      // 调用 action
      this.$store.dispatch('setCount')
    }
  }
}
</script>

<style>

</style>

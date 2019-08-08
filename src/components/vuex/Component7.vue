<template>
  <div>
    <h1>Module</h1>

    模块a中的count {{ $store.state.a.count }}

    <button @click="handle">按钮</button>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$store)
  },
  methods: {
    handle () {
      this.$store.commit('setACount')
    }
  }
}
</script>

<style>

</style>

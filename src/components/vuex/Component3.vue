<template>
  <div>
    <h1>State</h1>
    {{ msg }} ---- {{ count }}
  </div>
</template>

<script>
export default {
  computed: {
    msg () {
      return this.$store.state.msg
    },
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <h1>Getter</h1>
    {{ $store.getters.reverseMsg }}
    <br>
    {{ reverseMsg }}
  </div>
</template>

<script>
export default {
  computed: {
    reverseMsg() {
      return this.$store.getters.reverseMsg
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <h1>Parent</h1>

    <child :number="count"></child>
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
  }
}
</script>

<style>

</style>

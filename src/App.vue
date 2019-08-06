<template>
  <div id="app">
    <component1></component1>
    <component2></component2>
  </div>
</template>

<script>
import Component1 from './components/vuex/Component1'
import Component2 from './components/vuex/Component2'
import Component3 from './components/vuex/Component3'
import Component4 from './components/vuex/Component4'
export default {
  name: 'app',
  components: {
    Component1,
    Component2,
    Component3,
    Component4
  }
}
</script>

<style lang="less">
</style>

<template>
  <div id="app">
    <component1></component1>
    <component2></component2>
    <!-- state -->
    <component3></component3>
    <!-- getters -->
    <component4></component4>
    <!-- mutaion -->
    <component5></component5>
    <!-- action -->
    <component6></component6>
    <!-- 演示map辅助函数 -->
    <map1></map1>
    <!-- 演示Module -->
    <component7></component7>


  </div>
</template>

<script>
import Component1 from './components/vuex/Component1'
import Component2 from './components/vuex/Component2'
import Component3 from './components/vuex/Component3'
import Component4 from './components/vuex/Component4'
import Component5 from './components/vuex/Component5'
import Component6 from './components/vuex/Component6'
import Map1 from './components/vuex/Map'
import Component7 from './components/vuex/Component7'

export default {
  name: 'app',
  components: {
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
    Map1,
    Component7
  }
}
</script>

<style lang="less">
</style>

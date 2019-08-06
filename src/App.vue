<template>
  <div id="app">
    <parent></parent>

    <hr>
    <foo></foo>
    <bar></bar>
  </div>
</template>

<script>
import Parent from './components/Parent'
import Foo from './components/Foo'
import Bar from './components/Bar'
export default {
  name: 'app',
  components: {
    Parent,
    Foo,
    Bar
  }
}
</script>

<style lang="less">
</style>

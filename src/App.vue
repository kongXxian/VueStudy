<template>
  <div id="app">
    <Test/>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import TodoHeader from './components/TodoHeader'
import List from "@/components/List";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: 'App',
  components: {
    Test,TodoFooter,List,TodoHeader,
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
}
</style>

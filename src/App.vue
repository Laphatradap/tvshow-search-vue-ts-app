<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";

@Component({
  components: {
    AppNavbar,
    AppFooter
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  text-align: center;
  flex: 1 0 auto;
  display: flex;
  flex-flow: column;
}
</style>

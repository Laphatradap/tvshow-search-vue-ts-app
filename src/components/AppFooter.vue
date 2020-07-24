<template>
  <footer class="footer">
    <p>Sitemap</p>
  </footer>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class AppFooter extends Vue {}
</script>

<style lang="scss">
.footer {
  flex-shrink: 0;
  background-color: $color-black-light-1;
  color: white;
  height: 7rem;
}
</style>
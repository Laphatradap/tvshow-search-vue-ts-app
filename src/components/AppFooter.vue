<template>
  <footer class="footer">
    <ul class="footer__wrapper">
      <li class="footer__item text">
        <router-link to="/">Home</router-link>
      </li>
      <li class="footer__item text">
        <router-link to="/random">Random Shows Generator</router-link>
      </li>
    </ul>
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

  &__wrapper {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 7rem;
  }
  &__item {
    color: $color-white;

    a {
      color: $color-white;
      text-decoration: none;
      padding: 1.4rem;

      &:hover {
        background-color: $color-black;
      }
    }
  }
}
</style>

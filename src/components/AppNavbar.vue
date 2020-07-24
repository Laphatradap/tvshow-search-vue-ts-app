<template>
  <header class="header">
    <nav class="nav-container">
      <ul class="nav-wrapper">
        <li class="nav-item">
          <router-link to="/">TVSHOWLAND</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/random">Randomize</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class AppNavbar extends Vue {}
</script>


<style lang="scss">
.header {
  position: relative;
}

.nav-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 7rem;
  overflow: hidden;
  background-color: $color-black-light-1;
  font-size: 1.6rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  .nav-wrapper {
    flex: 0 0 100%;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;

    .nav-item {
      color: $color-white;

      &:first-child {
        margin-left: 3rem;
        margin-right: auto;
      }

      &:last-child {
        margin-right: 3rem;
      }

      a {
        color: $color-white;
        text-decoration: none;
        padding: 1.4rem;

        &:hover {
          background-color: green;
        }
      }
    }
  }
}
</style>
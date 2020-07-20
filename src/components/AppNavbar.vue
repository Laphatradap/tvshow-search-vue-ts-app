<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/random">Randomize</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/category">Categories</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class AppNavbar extends Vue {}
</script>
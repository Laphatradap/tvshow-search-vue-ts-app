<template>
  <section class="container">
    <img v-if="showList.image" :src="showList.image.medium" alt="poster" />
    <img v-else :src="require('../assets/noImage.png')" alt="poster not found" />
    <h1>{{showList.name}}</h1>
    <h4>{{showList.language}}</h4>
    <h4 v-for="(genre, index) in genres" :key="index">{{genre}}</h4>

    <h4>
      <a href="showList.url">{{showList.officialSite}}</a>
    </h4>

    <p v-html="showList.summary"></p>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tvshows from "@/store/modules/shows";

@Component
export default class Detailpage extends Vue {
  get showList() {
    return tvshows.showData
      .map(show => show.show)
      .find(item => item.id == Number(this.$route.params.id));
  }

  get genres() {
    return this.showList?.genres;
  }
}
</script>
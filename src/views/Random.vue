<template>
  <div>
    <h1>Random</h1>
    <img v-if="random.image" :src="random.image.medium" alt="random.name" />
    <img v-else :src="require('../assets/noImage.png')" alt="poster not found" />
    <div>{{random.name}}</div>
    <div>{{random.language}}</div>
    <h4>
      <a href="showList.url">{{random.officialSite}}</a>
    </h4>
    <p v-html="random.summary"></p>
    <button @click="randomize()">get random show</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tvshows from "@/store/modules/shows";

@Component({})
export default class Random extends Vue {
  get random() {
    return tvshows.randomShows;
  }

  randomize() {
    return tvshows.getRandomShows();
  }

  async created() {
    if (this.random.length === 0) {
      await tvshows.getRandomShows();
    }
  }
}
</script>
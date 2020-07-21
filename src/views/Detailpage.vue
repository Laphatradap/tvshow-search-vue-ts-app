<template>
  <section class="show-details">
    <img v-if="showDetails.image" :src="showDetails.image.medium" alt="poster" />
    <img v-else :src="require('../assets/noImage.png')" alt="poster not found" />
    <h1>{{showDetails.name}}</h1>
    <h4>{{showDetails.language}}</h4>
    <h4>rating: {{showDetails.rating.average}}</h4>
    <h4>{{showDetails.weight}} votes</h4>
    <h4 v-for="(genre, index) in genres" :key="index">{{genre}}</h4>
    <h4>
      <a href="showDetails.url">{{showDetails.officialSite}}</a>
    </h4>
    <p v-html="showDetails.summary"></p>
    <Suggestion />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tvshows from "@/store/modules/shows";
import Suggestion from "@/components/Shows/Suggestion.vue";

@Component({
  components: {
    Suggestion
  }
})
export default class Detailpage extends Vue {
  get showDetails() {
    return tvshows.showData
      .map(show => show.show)
      .find(item => item.id == Number(this.$route.params.id));
  }

  get genres() {
    return this.showDetails?.genres;
  }
}
</script>
<template>
  <section class="show-suggestion">
    <h1>More like this</h1>
    <div v-for="item in showSuggestion" :key="item.id">
      <router-link :to="{name: 'showDetails', params: {id: item.id}}">
        <img :src="item.image.medium" />
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tvshows from "@/store/modules/shows";

@Component({})
export default class Suggestion extends Vue {
  get showSuggestion() {
    return tvshows.showData
      .map(show => show.show)
      .filter(item => item.id !== Number(this.$route.params.id))
      .slice(0, 3);
  }
}
</script>
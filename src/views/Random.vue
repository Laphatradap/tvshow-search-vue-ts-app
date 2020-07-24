<template>
  <div class="container">
    <section class="section-random">
      <Card :show="random" />
    </section>
    <button @click="randomize()" class="btn btn-dark random__btn">get random show</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tvshows from "@/store/modules/shows";
import Card from "@/components/card.vue";

@Component({
  components: {
    Card
  }
})
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

<style lang="scss">
.section-random {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  // background: blue;
}
</style>
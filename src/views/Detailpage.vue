<template>
  <div class="container">
    <section class="section-showDetails">
      <Card :show="showDetails" />
    </section>
    <Suggestion />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tvshows from "@/store/modules/shows";
import Suggestion from "@/components/Shows/Suggestion.vue";
import Card from "@/components/card.vue";

@Component({
  components: {
    Suggestion,
    Card
  }
})
export default class Detailpage extends Vue {
  get showDetails() {
    return tvshows.showData
      .map(show => show.show)
      .find(item => item.id == Number(this.$route.params.id));
  }
}
</script>

<style lang="scss">
.section-showDetails {
  display: flex;
  justify-content: center;
}
</style>
<template>
  <div class="container">
    <section class="section-suggestion">
      <div class="suggestion">
        <h2 class="heading-secondary suggestion__title">More like this</h2>
        <div class="suggestion__image" v-for="item in showSuggestion" :key="item.id">
          <router-link :to="{name: 'showDetails', params: {id: item.id}}">
            <img :src="item.image.medium" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
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

<style lang="scss" scoped>
.section-suggestion {
  display: flex;
  justify-content: center;
}

.suggestion {
  flex: 0 0 70%;

  &__title {
    padding: 2rem;
  }
}
</style>
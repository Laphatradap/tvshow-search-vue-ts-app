<template>
  <div class="show">
    <div class="show__image">
      <a :href="show.url" target="_blank" rel="noopener noreferrer">
        <img v-if="show.image" :src="show.image.medium" alt="poster" />
        <img v-else :src="require('../assets/noImage.png')" alt="poster not found" />
      </a>
    </div>
    <div class="show__info">
      <h1 class="heading-primary show__info--name">{{show.name}}</h1>
      <h2 class="heading-secondary">{{show.language}}</h2>
      <h2 class="heading-secondary" v-for="(genre, index) in genres" :key="index">{{genre}}</h2>
      <h2
        v-if="show.rating.average"
        class="heading-secondary"
      >rating: {{show.rating.average}} ({{show.weight}} votes)</h2>
      <h2 v-else class="heading-secondary">No rating available</h2>
      <p v-if="show.summary" class="paragraph show__info--summary" v-html="show.summary"></p>
      <p v-else class="paragraph">We don't have a summary for {{show.name}} yet. Hang in there.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Show } from "@/store/models";

@Component({})
export default class Random extends Vue {
  @Prop()
  show?: Show;

  get genres() {
    return this.show?.genres;
  }
}
</script>

<style lang="scss">
.show {
  flex: 0 0 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  padding: 2rem;

  @include respond(phone) {
    padding: 2rem 0;
  }

  &__image {
    flex: 0 0 30%;
  }

  &__info {
    flex: 0 0 60%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;

    @include respond(tab-land) {
      flex: 0 0 90%;
      padding: 0.5rem;
    }

    & > * {
      padding: 1rem;
    }
    &--name {
      flex: 0 0 100%;
    }

    &--summary {
      text-align: center;
    }
  }
}
</style>
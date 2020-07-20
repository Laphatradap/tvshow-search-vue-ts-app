<template>
  <div v-if="suggestion">
    <img v-for="(image, index) in suggestionImages" :key="index" alt="poster" :src="image" />
    <!-- <img :src="require('../../assets/noImage.png')" alt="poster not found" /> -->
  </div>
  <div v-else>
    sth else
    <!-- sth else
    sth else
    <p>{{suggestion.map(s => s.image)}}</p>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// import { Show } from "@/store/models";

@Component
export default class Card extends Vue {
  @Prop({ default: () => [] })
  suggestion?: Array<{ image: { medium: string } }>;

  get suggestionImages() {
    return this.suggestion?.map(i => i.image.medium);
  }
}
</script>
<template>
  <div>
    <router-link :to="{ name: 'showDetails', params: { id: show.id } }">
      <img v-if="show.image" :src="show.image.medium" alt="poster" />
      <img v-else :src="require('../../assets/noImage.png')" alt="poster not found" />
    </router-link>
    <h3 class="heading-tertiary show-info__rating" v-if="!show.rating.average">no rating available</h3>
    <h3
      class="heading-tertiary show-info__rating"
      v-else
    >rating {{ show.rating.average }} ({{ show.weight }} votes)</h3>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Show } from "@/store/models";

@Component({})
export default class ShowContainer extends Vue {
  @Prop()
  show?: Show;
}
</script>


<style lang="scss">
.show-info {
  &__rating {
    margin-top: 2rem;
  }
}
</style>
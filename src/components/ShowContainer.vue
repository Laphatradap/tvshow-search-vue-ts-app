<template>
  <div class="container">
    <div class="show__card">
      <div class="show-info">
        <img v-if="show.show.image" :src="show.show.image.medium" alt="poster" />
        <img v-else :src="require('../assets/noImage.png')" alt="poster not found" />
      </div>
    </div>
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
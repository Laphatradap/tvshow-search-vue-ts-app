<template>
  <div class="container">
    <div class="show__card">
      <div class="show-info">
        <img :src="show.show.image.medium" alt="poster" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Show } from "@/store/models";
// import noImagePlaceholder from "../assets/noImage.png";

@Component({})
export default class ShowContainer extends Vue {
  @Prop()
  show?: Show;
}
</script>
<template>
  <div class="container">
    <div class="show__card">
      <div class="show-info">
        <router-link :to="{name: 'showDetails', params: {id: show.show.id}}">
          <img v-if="show.show.image" :src="show.show.image.medium" alt="poster" />
          <img v-else :src="require('../../assets/noImage.png')" alt="poster not found" />
        </router-link>
        <!-- <Card /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Show } from "@/store/models";
// import Card from "@/components/Shows/Card.vue";

@Component({
  // components: { Card }
})
export default class ShowContainer extends Vue {
  @Prop()
  show?: Show;
}
</script>
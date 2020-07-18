<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">TV Show Land</h1>
        <p>What to watch</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ShowContainer v-for="show in showList" :show="show" :key="show.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ShowContainer from "@/components/ShowContainer.vue";
import tvshows from "@/store/modules/shows";
import { Show } from "@/store/models";

@Component({
  components: {
    ShowContainer
  }
})
export default class Home extends Vue {
  showList: Show[] = [];
  query = "";

  created() {
    tvshows
      .refreshShow({
        query: this.query
      })
      .then(() => {
        this.showList = tvshows.showData;
      });
  }
}
</script>
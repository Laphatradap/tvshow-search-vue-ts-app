<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">TV Show Land</h1>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <SearchBar />
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
import SearchBar from "@/components/SearchBar.vue";
import tvshows from "@/store/modules/shows";

@Component({
  components: {
    ShowContainer,
    SearchBar
  }
})
export default class Home extends Vue {
  get showList() {
    return tvshows.showData;
  }

  async created() {
    if (this.showList.length === 0) {
      await tvshows.refreshShow("girls");
    }
  }
}
</script>
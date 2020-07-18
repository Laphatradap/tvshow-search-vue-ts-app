<template>
  <div class="container">
    <div class="search-bar">
      <form v-on:submit.prevent="search()">
        <input v-model="query" type="text" placeholder="Search by name" />
        <button>submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import tvshows from "@/store/modules/shows";
import { Show } from "@/store/models";

@Component
export default class SearchBar extends Vue {
  showList: Show[] = [];
  query = "";

  search() {
    tvshows.refreshShow(this.query).then(() => {
      this.showList = tvshows.showData;
    });
  }
}
</script>
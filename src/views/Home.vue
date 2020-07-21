<template>
  <div>
    <h1>TV Show Land</h1>
    <SearchBar />
    <select v-model="selected">
      <option>A-Z</option>
      <option>Z-A</option>
      <option>Rating 10-1</option>
      <option>Rating 1-10</option>
    </select>
    <ShowListContainer v-for="show in sortedShow" :show="show" :key="show.id" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ShowListContainer from "@/components/Shows/ShowListContainer.vue";
import SearchBar from "@/components/SearchBar.vue";
import Sorting from "@/components/Sorting.vue";
import tvshows from "@/store/modules/shows";
// type Nullable<T> = T | undefined | null;

@Component({
  components: {
    ShowListContainer,
    SearchBar,
    Sorting
  }
})
export default class Home extends Vue {
  selected = "A-Z";

  sortSelectionMapper = {
    "A-Z": (a: Record<string, any>, b: Record<string, any>): number =>
      a.show.name < b.show.name ? -1 : 1,
    "Z-A": (a: Record<string, any>, b: Record<string, any>): number =>
      a.show.name > b.show.name ? -1 : 1,
    "Rating 10-1": (a: Record<string, any>, b: Record<string, any>): number =>
      a.show.rating.average > b.show.rating.average ? -1 : 1,
    "Rating 1-10": (a: Record<string, any>, b: Record<string, any>): number =>
      a.show.rating.average < b.show.rating.average ? -1 : 1
  };

  get sortedShow() {
    return this.showList.sort(this.sortSelectionMapper[this.selected]);
  }

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
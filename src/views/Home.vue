<template>
  <div class="container">
    <section class="section-userInput">
      <div class="userInput__search">
        <SearchBar />
      </div>
      <div class="userInput__dropdown">
        <select v-model="selected">
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Rating 10-1</option>
          <option>Rating 1-10</option>
        </select>
      </div>
    </section>
    <section class="section-shows">
      <ShowListContainer class="show-info" v-for="show in sortedShow" :show="show" :key="show.id" />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ShowListContainer from "@/components/Shows/ShowListContainer.vue";
import SearchBar from "@/components/SearchBar.vue";
import tvshows from "@/store/modules/shows";

@Component({
  components: {
    ShowListContainer,
    SearchBar
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
    return this.showInfo.sort(this.sortSelectionMapper[this.selected]);
  }

  get showInfo() {
    return tvshows.showData;
  }

  async created() {
    if (this.showInfo.length === 0) {
      await tvshows.refreshShow("love");
    }
  }
}
</script>

<style lang="scss">
.container {
  max-width: $content-width;
  margin: 7rem auto;
  flex: 1 0 auto;
}
.section-userInput {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 2rem 0;
}

.userInput {
  @include respond(phone) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-self: center;
  }

  &__search {
    @include respond(phone) {
      display: flex;
      flex: 0 0 80%;
      padding: 1rem;
    }
  }

  &__dropdown {
    @include respond(phone) {
      padding: 1rem;
    }
  }
}

.section-shows {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 2rem 0;
}

.show-info {
  padding: 2rem;
  flex: 0 0 20%;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
}
</style>
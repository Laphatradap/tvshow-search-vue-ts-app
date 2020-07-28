<template>
  <form class="search" v-on:submit.prevent="search()">
    <input class="search__input" v-model="query" type="text" placeholder="Search by name" required />
    <button class="btn btn-dark search__button text">search</button>
  </form>
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
      this.query = "";
    });
  }
}
</script>

<style lang="scss">
.search {
  flex: 0 0 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-right: 10rem;

  @include respond(phone) {
    flex: 0 0 100%;
  }

  &__input {
    font-family: inherit;
    font-size: inherit;
    border: none;
    padding: 0.9rem 2rem;
    border-radius: 10rem;
    width: 100%;
    margin-right: 0.5rem;
    background: $color-grey-light-1;

    &:focus {
      outline: none;
      width: 100%;
    }

    &::-webkit-input-placeholder {
      font-weight: 100;
    }
  }
}
</style>
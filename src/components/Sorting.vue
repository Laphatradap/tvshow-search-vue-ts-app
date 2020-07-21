<template>
  <div class="container">
    <h3>Sort movies by:</h3>
    <button @click="sortLowest">Least Rated</button>
    <button @click="sortHighest">Most Rated</button>
    
    <table>
      <!-- <thead>
        <tr>
          <th v-for="key in columns">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredFilms">
          <td v-for="key in columns">{{entry[key]}}</td>
        </tr>
      </tbody>
      <tbody></tbody> -->
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// import tvshows from "@/store/modules/shows";

@Component
export default class SearchBar extends Vue {
  @Prop()
  rating = '';
 



// sortLowest() {
//       this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
//     },
//     sortHighest() {
//       this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
//     }
}
</script>
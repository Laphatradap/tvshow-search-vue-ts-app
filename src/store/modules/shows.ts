import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action,
} from "vuex-module-decorators";
import store from "@/store";
import { Show } from "../models";
import { fetchShows, fetchRandomShows } from "../api";

@Module({
  namespaced: true,
  name: "tvshows",
  dynamic: true,
  store,
})
class ShowsModule extends VuexModule {
  showData: Show[] = [];
  randomShows: Show[] = [];

  get showList() {
    return this.showData;
  }

  @Mutation
  setShow(shows: Show[]) {
    this.showData = shows;
  }

  @Action({ commit: "setShow" })
  async refreshShow(query: string) {
    const showData = await fetchShows(query);
    return showData;
  }

  get random() {
    return this.randomShows;
  }

  @Mutation
  setRandomShows(shows: Show[]) {
    this.randomShows = shows;
  }

  @Action({ commit: "setRandomShows" })
  async getRandomShows() {
    const randomShows = await fetchRandomShows();
    return randomShows;
  }
}

export default getModule(ShowsModule);

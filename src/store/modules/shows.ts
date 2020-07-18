import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action,
} from "vuex-module-decorators";
import store from "@/store";
import { Show } from "../models";
import { fetchShows } from "../api";

@Module({
  namespaced: true,
  name: "tvshows",
  dynamic: true,
  store,
})
class ShowsModule extends VuexModule {
  showData: Show[] = [];

  get showList() {
    console.log(this.showData);
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
}

export default getModule(ShowsModule);

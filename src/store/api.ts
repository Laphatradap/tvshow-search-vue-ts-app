import axios from "axios";
import { ShowsResponse } from "./models";

export const tvMazeApi = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export async function fetchShows(query: string) {
  try {
    const response = await tvMazeApi.get("/search/shows", {
      params: {
        q: query,
      },
    });
    return response.data as ShowsResponse;
  } catch (err) {
    console.error(err);
  }
}

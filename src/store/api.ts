import axios from "axios";
import { ShowsResponse } from "./models";
import shows from "./modules/shows";

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

export async function fetchRandomShows() {
  const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  try {
    const response = await tvMazeApi.get(`/shows/${randomNum(1, 20000)}`);
    return response.data as ShowsResponse;
  } catch (err) {
    console.error(err);
  }
}

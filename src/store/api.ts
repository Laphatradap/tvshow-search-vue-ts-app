import axios from "axios";
import { ShowsResponse } from "./models";
import shows from './modules/shows';

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
    const response = await tvMazeApi.get(`/shows/${randomNum(1, 10000)}`);
    console.log("OUTPUT: fetchRandomShows -> response", response.data, response.data.id)
    
    return response.data as ShowsResponse;
  } catch (err) {
    console.error(err);
  }
}

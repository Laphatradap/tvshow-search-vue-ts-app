export interface Image {
  medium: string;
  original: string;
}

export interface Rating {
  average?: number;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  language: string;
  officialSite?: string;
  rating: Rating;
  weight: number;
  image?: Image;
  genres: string[];
  summary: string;
}

export interface ShowsResponse {
  shows?: Show[] | null;
}

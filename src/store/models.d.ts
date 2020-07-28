export interface Image {
  medium: string;
  original: string;
}

export interface Rating {
  average?: number ;
}

export interface Show {
  show: {
    id: number;
    url: string;
    name: string;
    language: string;
    officialSite?: string | null;
    rating: Rating;
    weight: number;
    image?: Image | null;
    genres: string[];
    summary: string;
  };
}
export interface ShowsResponse {
  shows?: Show[] | null;
}

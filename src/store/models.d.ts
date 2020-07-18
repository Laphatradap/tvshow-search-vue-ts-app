export interface Image {
  medium: string;
  original: string;
}

export interface Show {
  show: {
    id: number;
    url: string;
    name: string;
    language: string;
    officialSite?: string | null;
    image?: Image | null;
    summary: string;
  };
} 

export interface ShowsResponse {
  shows?: Show[] | null;
}

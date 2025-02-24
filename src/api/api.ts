import { Show } from "../types"; // ✅ Теперь берем Show из types.ts

interface ApiResponse {
  show: Show;
}

export const fetchShows = async (query: string): Promise<Show[]> => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data: ApiResponse[] = await response.json();
  return data.map((item) => item.show);
};

export const fetchShowById = async (id: string): Promise<Show> => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

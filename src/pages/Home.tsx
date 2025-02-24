import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ShowList from "../components/ShowList";
import { Show } from "../types";
import { fetchShows } from "../api/api";

const Home = () => {
  const [shows, setShows] = useState<Show[]>([]);

  const handleSearch = async (query: string) => {
    const results = await fetchShows(query);
    setShows(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ShowList shows={shows} />
    </div>
  );
};

export default Home;

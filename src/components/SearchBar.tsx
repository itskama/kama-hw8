import { useState } from "react";
import { Box, TextField, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Show } from "../types";
import { fetchShows } from "../api/api";

interface SearchBarProps {
  onSearch: (query: string) => void; 
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Show[]>([]);
  const navigate = useNavigate();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (value.length > 2) {
      const shows = await fetchShows(value);
      setResults(shows);
      onSearch(value); 
    } else {
      setResults([]);
    }
  };

  return (
    <Box sx={{ position: "relative", width: "300px" }}>
      <TextField
        fullWidth
        label="Search TV Shows"
        variant="outlined"
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <List sx={{ position: "absolute", width: "100%", bgcolor: "white", boxShadow: 1 }}>
          {results.map((show) => (
            <ListItem component="div" key={show.id} onClick={() => navigate(`/shows/${show.id}`)}>
              <ListItemText primary={show.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;

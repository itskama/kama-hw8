import { Show } from "../types"; // ✅ Импортируем из types.ts
import ShowCard from "./ShowCard";
import { Grid } from "@mui/material";

interface ShowListProps {
  shows: Show[];
}

const ShowList = ({ shows }: ShowListProps) => (
  <Grid container spacing={2}>
    {shows.map((show) => (
      <Grid item key={show.id} xs={12} sm={6} md={4}>
        <ShowCard show={show} />
      </Grid>
    ))}
  </Grid>
);

export default ShowList;

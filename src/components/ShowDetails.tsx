import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowById } from "../api/api";
import { Show } from "../types"; // ✅ Импортируем из types.ts
import { Container, Typography, Box } from "@mui/material";

const ShowDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    if (id) {
      fetchShowById(id).then(setShow);
    }
  }, [id]);

  if (!show) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{show.name}</Typography>
      {show.image && <Box component="img" src={show.image.medium} alt={show.name} />}
      <Typography dangerouslySetInnerHTML={{ __html: show.summary || "No description" }} />
    </Container>
  );
};

export default ShowDetails;

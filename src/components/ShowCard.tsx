import { Show } from "../types"; 
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ShowCardProps {
  show: Show;
}

const ShowCard = ({ show }: ShowCardProps) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/shows/${show.id}`)} sx={{ cursor: "pointer" }}>
      {show.image && <CardMedia component="img" height="140" image={show.image.medium} />}
      <CardContent>
        <Typography variant="h6">{show.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default ShowCard;

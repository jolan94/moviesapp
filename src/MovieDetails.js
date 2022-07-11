import { useParams } from "react-router-dom";
import { NavigationPage } from "./NavigationPage";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function MovieDetails({ movlst }) {
  const { id } = useParams();
  const movie = movlst[id];

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div className="moviedetail-container">
      <iframe
        width="100%"
        height="720"
        src={movie.trailer}
        title="Master - Official Teaser | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="movie-detail-spec">
        <h3 className="movie-name">{movie.name} </h3>
        <h4 className="movie-ratings" style={styles}>
          ⭐ {movie.rating}
        </h4>
      </div>
      <p className="movie-detail-summary"> {movie.summary}</p>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        size="small"
        sx={{ ml: 2, mr: 2 }}
        color="primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
    </div>
  );
}

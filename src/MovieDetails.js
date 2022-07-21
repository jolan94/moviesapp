import { useParams } from "react-router-dom";
import { NavigationPage } from "./NavigationPage";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function MovieDetails() {
  const [movielist, setMovieList] = useState([]);
  const { id } = useParams();
  const movie = movielist.find((item) => item.id === id);

  useEffect(() => {
    const url = "https://62cc12a78042b16aa7c840c8.mockapi.io/movies";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setMovieList(json);
        movielist.find((item) => item.id === id);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  console.log("Here is the id " + id);
  console.log(
    "Movie for the id " +
      id +
      "movie details" +
      movielist.find((item) => item.id === id)
  );

  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div className="moviedetail-container">
      This is movie details
      <iframe
        width="100%"
        height="720"
        src={movie.trailer}
        title="Master"
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

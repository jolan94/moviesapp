import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export function Movie({ movie, id }) {
  const [displayval, setDisplay] = useState(true);
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const style = {
    color: "black",
    display: displayval ? "flex" : "none",
  };

  const iconVal = displayval ? (
    <ArrowDropUpIcon color="primary" fontSize="large" />
  ) : (
    <ArrowDropDownIcon color="primary" fontSize="large" />
  );

  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img
        src={movie.poster}
        className="poster"
        placeholder={movie.name}
        alt=""
      />
      <CardContent>
        <div class="movie-spec">
          <h3 className="movie-name">
            {movie.name}{" "}
            <IconButton
              color="primary"
              aria-label="Info view"
              onClick={() => {
                navigate("/movies/" + id);
                console.log("/movies/" + id);
              }}
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Expand Description"
              onClick={() => setDisplay(!displayval)}
            >
              {iconVal}
            </IconButton>
          </h3>
          <h4 className="movie-ratings" style={styles}>
            ⭐ {movie.rating}
          </h4>
        </div>
        <p className="movie-summary" style={style}>
          {" "}
          {movie.summary}
        </p>
      </CardContent>

      <Counter />
    </Card>
  );
}

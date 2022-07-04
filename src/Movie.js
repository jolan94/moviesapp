import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import InfoIcon from "@mui/icons-material/Info";

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
    <ArrowDropUpIcon color="secondary" fontSize="large" />
  ) : (
    <ArrowDropDownIcon color="secondary" fontSize="large" />
  );

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img
        src={movie.poster}
        className="poster"
        placeholder={movie.name}
        alt=""
      />
      <div class="movie-spec">
        <h3 className="movie-name">
          {movie.name}{" "}
          <button
            className="expand-button"
            onClick={() => {
              navigate("/movies/" + id);
              console.log("/movies/" + id);
            }}
          >
            <InfoIcon color="primary" fontSize="small" />
          </button>
          <button
            className="expand-button"
            onClick={() => setDisplay(!displayval)}
          >
            {iconVal}
          </button>
        </h3>
        <h4 className="movie-ratings" style={styles}>
          ⭐ {movie.rating}
        </h4>
      </div>
      <p className="movie-summary" style={style}>
        {" "}
        {movie.summary}
      </p>
      <Counter />
    </div>
  );
}

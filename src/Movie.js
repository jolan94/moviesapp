import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ movie }) {
  const [displayval, setDisplay] = useState(true);
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const style = {
    color: "black",
    display: displayval ? "flex" : "none",
  };

  const textval = displayval ? "Hide" : "More";

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
            onClick={() => setDisplay(!displayval)}
          >
            {textval}
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

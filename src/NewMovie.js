import { useState } from "react";

export function NewMovie(movlist, setFunc) {
  const [moviename, setMovieName] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");

  return (
    <div className="newmovie">
      <input
        type="text"
        placeholder="Enter Movie Name"
        className="inputfield"
        onChange={(e) => setMovieName(e.target.value, console.log(moviename))}
      ></input>
      <input
        type="text"
        placeholder="Rating (1-10)"
        className="inputfield"
        onChange={(e) => setRating(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Summary"
        className="inputfield"
        onChange={(e) => setSummary(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Poster URL"
        className="inputfield"
        onChange={(e) => setPoster(e.target.value)}
      ></input>
      <button
        className="submitbutton"
        onClick={() => {
          const newMovie = {
            name: moviename,
            poster: poster,
            summary: summary,
            rating: rating,
          };
          console.log(newMovie);
          console.log("Initaial movie list length " + movlist.length);
          const updatedMoviesArray = [...movlist, newMovie];
          console.log(
            "Updated array movie list length " + updatedMoviesArray.length
          );
          setFunc(updatedMoviesArray);
          console.log("Final movie list length " + updatedMoviesArray.length);
        }}
      >
        {" "}
        Submit
      </button>
    </div>
  );
}

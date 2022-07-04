import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { NavigationPage } from "./NavigationPage";
import Box from "@mui/material/Box";

export function AddMovie(movlist, setFunc) {
  const [moviename, setMovieName] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div className="newmovie">
      <NavigationPage />

      <div className="newmovieentry">
        <TextField
          fullWidth
          size="small"
          margin="normal"
          id="filled-basic"
          label="Movie Name"
          variant="filled"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="filled-basic"
          label="Rating (1-10)"
          variant="filled"
          onChange={(e) => setRating(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="filled-basic"
          label="Summary"
          variant="filled"
          onChange={(e) => setSummary(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="filled-basic"
          label="Poster URL"
          variant="filled"
          onChange={(e) => setPoster(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          id="filled-basic"
          label="Trailer URL"
          variant="filled"
          onChange={(e) => setTrailer(e.target.value)}
        />
        <Button
          fullWidth
          margin="normal"
          sx={{ mt: 5 }}
          variant="contained"
          onClick={() => {
            const newMovie = {
              name: moviename,
              poster: poster,
              summary: summary,
              rating: rating,
              trailer: trailer,
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
          Submit
        </Button>
      </div>
    </div>
  );
}

import { Movie } from "./Movie";
import { NewMovie } from "./AddMovie";
import { NavigationPage } from "./NavigationPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

export function Movies() {
  const [movielist, setMovieList] = useState([]);

  useEffect(() => {
    const url = "https://62cc12a78042b16aa7c840c8.mockapi.io/movies";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setMovieList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="MoviesList">
        {movielist.map((mve, index) => (
          <Movie
            movie={mve}
            id={mve.id}
            key={mve.id}

            // editBtn={
            //   <IconButton aria-label="delete" disabled color="primary">
            //     <EditIcon />
            //   </IconButton>
            // }
          />
        ))}
      </div>
    </div>
  );
}

import "./App.css";
import { createContext, useState, useEffect } from "react";
import { AddMovie, NewMovie } from "./AddMovie";
import { Contact } from "./Contact";
import { Error404 } from "./Error404";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { Movies } from "./Movies";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavigationPage } from "./NavigationPage";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const themeCtx = createContext();

function App() {
  const navigate = useNavigate();
  // const INITIAL_MOVIE_LIST = [
  //   {
  //     name: "Top Gun",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
  //     rating: 8.5,
  //     trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
  //     summary:
  //       "Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.",
  //   },

  //   {
  //     name: "Vikram",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZTNhMjU2NTAtZTg5My00ZTg2LWIwZjMtNzRiNGFhZDc2OTg1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY1200_CR80,0,630,1200_AL_.jpg",
  //     rating: 5.5,
  //     trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
  //     summary:
  //       "Members of a black ops team must track and eliminate a gang of masked murderers.",
  //   },
  //   {
  //     name: "Beast",
  //     poster:
  //       "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
  //     rating: 7.5,
  //     trailer: "https://www.youtube.com/embed/0E1kVRRi6lk",
  //     summary:
  //       "A jaded former intelligence agent is pulled back into action when an attack at a mall creates a tense hostage situation.",
  //   },
  //   {
  //     name: "Valimai",
  //     poster:
  //       "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z5117563/portrait/1920x77083faed0740ea4c8583843fea8c3b417a.jpg",
  //     rating: 6.5,
  //     trailer: "https://www.youtube.com/embed/Gi83R8jEqZU",
  //     summary:
  //       "A city witnesses a spike in its crime rate due to the nefarious activities of a notorious motorcycle club. When things get out of hand, it is up to Arjun, a police officer, to restore law and order.",
  //   },
  //   {
  //     name: "Avatar",
  //     poster:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kQL47PtECE3iRRjzyfgXbNcPgFX4txEG6w&usqp=CAU",
  //     rating: 9.5,
  //     trailer: "https://www.youtube.com/embed/a8Gx8wiNbs8",
  //     summary:
  //       "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
  //   },
  // ];
  let [movielistInside, setMovieList] = useState([]);

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

  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={10}>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Movies
              </Typography>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/addmovie");
                }}
              >
                Add Movie
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/error");
                }}
              >
                Error
              </Button>
              <Button
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/addmovie" element={<AddMovie />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            {/* <Route path="/movies/edit/:id" element={<EditMovie />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

{
  /* <Route path="/movies/edit/:id" element={<EditMovie />} />;

function EditMovie() {
  const { id } = useParams();
  return (
    <div>
      <h1>Movie Editing Page ${id} </h1>
    </div>
  );
} */
}

export default App;

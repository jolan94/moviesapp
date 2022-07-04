import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

export function NavigationPage() {
  const navigate = useNavigate();
  return (
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
              navigate("/movies");
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
        </Toolbar>
      </AppBar>
      {/* Navigation list Items below
      <ul>
        <li>
          <Link to="/movies">Home</Link>
        </li>
        <li>
          <Link to="/addmovie">Add Movie</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
    </div>
  );
}

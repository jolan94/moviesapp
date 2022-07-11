import { Movie } from "./Movie";
import { NewMovie } from "./AddMovie";
import { NavigationPage } from "./NavigationPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

export function Movies({ movlst }, { movFunc }) {
  return (
    <div>
      {/* <Paper elevation={3} /> */}
      {/* <NavigationPage /> */}
      <div className="MoviesList">
        {movlst.map((mve, index) => (
          <Movie movie={mve} key={index} id={index} />
        ))}
      </div>
      {/* <Paper /> */}
    </div>
  );
}

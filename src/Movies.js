import { Movie } from "./Movie";
import { NewMovie } from "./AddMovie";
import { NavigationPage } from "./NavigationPage";

export function Movies({ movlst }, { movFunc }) {
  return (
    <div>
      <NavigationPage />
      <div className="MoviesList">
        {movlst.map((mve, index) => (
          <Movie movie={mve} key={index} id={index} />
        ))}
      </div>
    </div>
  );
}

import "./App.css";
import { useState } from "react";

function App() {
  const movielist = [
    {
      name: "Master",
      poster:
        "https://pbs.twimg.com/media/EVJgwvdU0AI59iw?format=jpg&name=900x900",
      rating: 8.5,
      summary:
        "An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    },
    {
      name: "Top Gun",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      rating: 8.5,
      summary:
        "Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.",
    },
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTNhMjU2NTAtZTg5My00ZTg2LWIwZjMtNzRiNGFhZDc2OTg1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY1200_CR80,0,630,1200_AL_.jpg",
      rating: 5.5,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "Beast",
      poster:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXT_T2L5qyTIlgkraZUkd2cjuJqtG-dCLBDIMilfaJEE5SIpT9",
      rating: 7.5,
      summary:
        "A jaded former intelligence agent is pulled back into action when an attack at a mall creates a tense hostage situation.",
    },
    {
      name: "Valimai",
      poster:
        "https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z5117563/portrait/1920x77083faed0740ea4c8583843fea8c3b417a.jpg",
      rating: 6.5,
      summary:
        "A city witnesses a spike in its crime rate due to the nefarious activities of a notorious motorcycle club. When things get out of hand, it is up to Arjun, a police officer, to restore law and order.",
    },
    {
      name: "Avatar",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kQL47PtECE3iRRjzyfgXbNcPgFX4txEG6w&usqp=CAU",
      rating: 9.5,
      summary:
        "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
    },
  ];
  return (
    <div className="App">
      <PageNavigation />
      <NewMovie />

      {movielist.map((mve) => (
        <Movie movie={mve} />
      ))}
    </div>
  );
}

function PageNavigation() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>New Movies</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

function NewMovie() {
  const [moviename, setMovieName] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  return (
    <div className="newmovie">
      <form>
        <label>
          Enter movie name
          <input
            type="text"
            name="movie-name"
            value={moviename}
            onChange={(e) =>
              setMovieName(e.target.value, console.log(moviename))
            }
          ></input>
        </label>
        <label>
          Enter movie Summary
          <input></input>
        </label>
        <label>
          Enter rating
          <input></input>
        </label>
        <label>
          Enter Poster Url
          <input></input>
        </label>
        <label>
          <input type="submit"></input>
        </label>
      </form>
    </div>
  );
}

function Movie({ movie }) {
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

function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="like-dislike">
      <button
        className="button"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {" "}
        <span>👍 </span>Like {like}
      </button>
      <button
        className="button"
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        {" "}
        <span>👎 </span>Dislike {disLike}
      </button>
    </div>
  );
}

export default App;

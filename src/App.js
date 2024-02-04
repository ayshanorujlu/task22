import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import { imdbs } from "./Imdb";

const movies = [
  {
    name: "Home Alone 2",
    genre: "Christmas family Comedy",
    creator: "Chris Columbus",
    description:
      "It follows Kevin McCallister as he is separated from his family on their holiday vacation to Florida, this time in New York City where he has another encounter with the Wet Bandits after their escape from prison.",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRt9pMPb7zNqHkSLYFnyku7GNCTkSRlp2eOki65-H71WniBpKno"
  },
  {
    name: "Paper Towns",
    genre: "Mystery/Romance",
    creator: "John Green",
    description:
      "Based on the New York Times bestseller, this movie tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters the fifth grade, attending a mainstream elementary school for the first time.",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQuizurcX4c758Rr6ZvtyIQbUDCB9rgcvhYRNBCstcGNxmqTXJy"
  },
  {
    name: "Recep Ivedik 7",
    genre: "Comedy",
    creator: "Togan Gokbakar",
    description:"When developers threaten to raze Recep's new country home, he must defend the village with a little help from the quirky locals and ever-loyal Nurullah.",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUXE58FuOeGcl4L3yOH01P_gI0FKs6N83CAszzp0X93DilRtP0"
  },
];
const headerInfo = {
  cinema: "Park Cinema"
};




function App() {
  const imdbRatings = imdbs.reduce((acc, imdb) => {
    acc[imdb.movieName] = imdb.rate;
    return acc;
  }, {});

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Header headerInfo={headerInfo}></Header>
      </div>
      <hr/>
      
      <div style={{ display: "flex" }}>
        {movies.map((m) => (
          <Movie
            key={m.name}
            size={100}
            movie={m}
            imdbRating={imdbRatings[m.name] || "Rating not available"}
          ></Movie>
        ))}
      </div> <hr/>    
    </div>
  );
}
export default App;

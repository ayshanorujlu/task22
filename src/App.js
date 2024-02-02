import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import { imdbs } from "./Imdb";

const movies = [
  {
    name: "Forever",
    genre: "Detective",
    creator: "Matthew Miller",
    description:
      "Dr Henry Morgan, a medical examiner, works with his partner Detective Jo Martinez, to solve criminal cases. Along the way, he tries to uncover the mystery to his 200-year-old immortality.",
    img: "https://m.media-amazon.com/images/M/MV5BMTQzMTUwMjQ3Nl5BMl5BanBnXkFtZTgwMTY2MDE5MjE@._V1_.jpg",
  },
  {
    name: "Paper Towns",
    genre: "Mystery/Romance",
    creator: "John Green",
    description:
      "Based on the New York Times bestseller, this movie tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters the fifth grade, attending a mainstream elementary school for the first time.",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQuizurcX4c758Rr6ZvtyIQbUDCB9rgcvhYRNBCstcGNxmqTXJy",
  },
  {
    name: "Recep Ivedik 7",
    genre: "Comedy",
    creator: "Togan Gokbakar",
    description:"When developers threaten to raze Recep's new country home, he must defend the village with a little help from the quirky locals and ever-loyal Nurullah.",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUXE58FuOeGcl4L3yOH01P_gI0FKs6N83CAszzp0X93DilRtP0",
  },
];
const headerInfo = {
  cinema: "Ganjlik Mall"
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
      <div style={{ display: "flex" }}>
        {movies.map((m) => (
          <Movie
            key={m.name}
            size={100}
            movie={m}
            imdbRating={imdbRatings[m.name] || "Rating not available"}
          ></Movie>
        ))}
      </div>     
    </div>
  );
}
export default App;

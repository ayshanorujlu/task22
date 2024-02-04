import React, { Component } from "react";

export const imdbs = [
  {
    movieName: "Home Alone 2",
    rate: 9.8,
  },
  {
    movieName: "Paper Towns",
    rate: 7.5,
  },
  {
    movieName: "Recep Ivedik 7",
    rate: 8.9,
  },
];
export default class Imdb extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {imdbs.map((imdb) => (
          <div key={imdb.movieName}>
            <p>
              {imdb.movieName}: {imdb.rate}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

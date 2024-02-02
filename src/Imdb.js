import React, { Component } from "react";

export const imdbs = [
  {
    movieName: "Forever",
    rate: 9.6,
  },
  {
    movieName: "Wonder",
    rate: 8.5,
  },
  {
    movieName: "Stranger Things",
    rate: 7.9,
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

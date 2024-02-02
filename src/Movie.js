import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1>{this.props.movie.name}</h1>
          <img style={styles.image} src={this.props.movie.img} alt="movie" />
          <p>IMDb Rating: {this.props.imdbRating}</p>
        </div>
        <div style={styles.description}>
          <p>{this.props.movie.description}</p>
          <p style={styles.genre}>Genre: {this.props.movie.genre}</p>
          <p style={styles.creator}>Creator: {this.props.movie.creator}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    padding: 10,
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    width: "100px",
  },
  description: {
    margin: "30px 20px",
    fontSize: "12px",
  },
  genre: {
    fontStyle: "italic",
    color: "#007bff",
  },
  creator: {
    margin: "10px 0",
    fontWeight: "bold",
  },
};

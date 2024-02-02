import React, { Component } from "react";

export default class Fedback extends Component {
  render() {
    return (
      <div style={{ color: "white", marginLeft: "12%" }}>
        <div>
          <h2>{this.props.feedback.movieName}</h2>
        </div>
        <div>
          <p>{this.props.feedback.comment}</p>
        </div>
      </div>
    );
  }
}

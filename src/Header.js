import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { cinema } = this.props.headerInfo;
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>{cinema}</h1>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "30px",
    minWidth:"200vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0.3, 0, 0.3)",
    padding: "20px",
    color: "white",
    backgroundColor: "rgb(8, 73, 85)",
    color:"yellow",
    
  },
  h1: {
    margin:"500px"
    
  },
};

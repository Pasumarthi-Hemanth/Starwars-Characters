import React, { Component } from "react";

export default class Character extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      name: null,
      height: null,
      loadedChar: false
    };
  }
  getNewCharacter() {
    const randomNumber = Math.ceil(Math.random() * 88);
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          image: data.image,
          name: data.name,
          height: data.height,

          loadedChar: true
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.loadedChar && (
          <div>
            <img
              src={this.state.image}
              alt="Character"
              className="char-img"
            ></img>
            <h1>Name: {this.state.name}</h1>
            <p>Height: {this.state.height} cm</p>
          </div>
        )}

        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Random Character
        </button>
      </div>
    );
  }
}

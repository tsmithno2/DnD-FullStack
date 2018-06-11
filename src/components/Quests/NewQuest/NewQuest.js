import React, { Component } from "react";

export default class NewQuest extends Component {
  constructor() {
    super();
    this.state = {
      qPicture: "",
      qDescription: ""
    };
  }

  clickCancel() {
    this.setState({
      qPicture: "",
      qDescription: ""
    });
  }

  render() {
    return (
      <div>
        <p>
          Quest Picture{" "}
          <input
            value={this.state.qPicture}
            onChange={e => this.setState({ qPicture: e.target.value })}
          />
        </p>
        <p>
          Quest Description{" "}
          <input
            value={this.state.qDescription}
            onChange={e => this.setState({ qDescription: e.target.value })}
          />
        </p>
        <button onClick={() => console.log(this.state)}>Save</button>
        <button onClick={() => this.clickCancel()}>Cancel</button>
        <div />
      </div>
    );
  }
}

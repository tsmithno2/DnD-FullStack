import React, { Component } from "react";

export default class NewCampaign extends Component {
  constructor() {
    super();
    this.state = {
      campName: "",
      campPicture: "",
      campDescription: ""
    };
  }

  clickCancel() {
    this.setState({
      campName: "",
      campPicture: "",
      campDescription: ""
    });
  }

  render() {
    return (
      <div>
        <h1>New Campaign</h1>
        <p>
          Campaign Picture{" "}
          <input
            value={this.state.campPicture}
            onChange={e => this.setState({ campPicture: e.target.value })}
          />
        </p>

        <p>
          Campaign Name{" "}
          <input
            value={this.state.campName}
            onChange={e => this.setState({ campName: e.target.value })}
          />
        </p>

        <p>
          Campaign Description{" "}
          <input
            value={this.state.campDescription}
            onChange={e => this.setState({ campDescription: e.target.value })}
          />
        </p>
        <button onClick={() => console.log(this.state)}>Create</button>
        <button onClick={() => this.clickCancel()}>Cancel</button>
      </div>
    );
  }
}

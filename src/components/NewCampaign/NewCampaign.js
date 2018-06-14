import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "axios";

export default class NewCampaign extends Component {
  constructor() {
    super();
    this.state = {
      camp_picture: "",
      camp_name: "",
      camp_desc1: "",
      camp_desc2: ""
    };
  }

  clickCancel() {
    this.setState({
      camp_picture: "",
      camp_name: "",
      camp_desc1: "",
      camp_desc2: ""
    });
  }

  clickCreate() {
    axios.post("/api/createcampaign", {
      camp_name: this.state.camp_name,
      camp_desc1: this.state.camp_desc1,
      camp_desc2: this.state.camp_desc2,
      camp_picture: this.state.camp_picture
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>New Campaign</h1>
        <p>
          Campaign Picture (URL's ONLY){" "}
          <input
            value={this.state.camp_picture}
            onChange={e => this.setState({ camp_picture: e.target.value })}
          />
        </p>

        <p>
          Campaign Name{" "}
          <input
            value={this.state.camp_name}
            onChange={e => this.setState({ camp_name: e.target.value })}
          />
        </p>

        <p>
          One Senence Campaign Description{" "}
          <input
            value={this.state.camp_desc1}
            onChange={e => this.setState({ camp_desc1: e.target.value })}
          />
        </p>

        <p>
          Full Campaign Description{" "}
          <input
            value={this.state.camp_desc2}
            onChange={e => this.setState({ camp_desc2: e.target.value })}
          />
        </p>

        <button onClick={() => console.log(this.state)}>Create</button>
        <button onClick={() => this.clickCancel()}>Cancel</button>
      </div>
    );
  }
}

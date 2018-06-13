import React, { Component } from "react";
import Header from "../Header/Header";
import { displayCampaigns } from "../../dux/reducer";

export default class Home extends Component {
  componentDidMount() {
    this.props.displayCampaigns();
  }

  render() {
    let { campaigns } = this.props.campaignsList;
    return (
      <div>
        <Header />

        <h1>Home</h1>

        <hr />
        <div>
          <h3>List of Campaigns</h3>
          <hr />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { displayCampaigns }
)(Home);

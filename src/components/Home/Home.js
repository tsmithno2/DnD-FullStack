import React, { Component } from "react";
import Header from "../Header/Header";
import {
  displayCampaigns,
  getParties,
  deleteCampaign
} from "../../dux/reducer";
import { connect } from "react-redux";
import Campaign from "./Campaign";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.displayCampaigns();
    this.props.getParties();
  }

  render() {
    let campaigns = this.props.campaignsList.map((campaign, i) => {
      return <Campaign key={i} campaign={campaign} i={i} />;
    });

    return (
      <div>
        <Header />

        <h1>Home</h1>

        <hr />
        <div className="CampaignList">
          <h2>List of Campaigns</h2>
          <hr />
        </div>
        {campaigns}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //name on the object coming from the server: how we refference it
    campaignsList: state.campaignsList
  };
}

export default connect(
  mapStateToProps,
  { displayCampaigns, getParties, deleteCampaign }
)(Home);

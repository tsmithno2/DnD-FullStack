import React, { Component } from "react";
import {
  displayCampaigns,
  getParties,
  deleteCampaign
} from "../../dux/reducer";
import { connect } from "react-redux";
import Campaign from "./Campaign";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.displayCampaigns();
    this.props.getParties();
  }

  render() {
    let campaigns = this.props.campaignsList.map((campaign, i) => {
      return (
        <Campaign
          key={i}
          campaign={campaign}
          i={i}
          componentDidMount={this.componentDidMount}
        />
      );
    });

    return (
      <div className="Display">
        <h1>Campaign List</h1>
        <div className="Campaigns">{campaigns}</div>
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

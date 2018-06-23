import React, { Component } from "react";
import Header from "../Header/Header";
import {
  displayCampaigns,
  getParties,
  deleteCampaign
} from "../../dux/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.displayCampaigns();
    this.props.getParties();
  }

  render() {
    // let partyMembers= this.props.  this will be mapping the array returned that is a join of users to campaigns to parties to characters where the user_id is the same the camp_id is the same and the party is the same

    let campaigns = this.props.campaignsList.map((campaign, i) => {
      return (
        <div key={`campagin ${i}`}>
          <h3>Campaign #{i + 1}</h3>
          <img src={campaign.camp_picture} alt="" />
          <p>Campign Name: {campaign.camp_name}</p>
          <p>Quick Description: {campaign.camp_desc1}</p>
          <Link to={`/playing/${campaign.camp_id}`}>
            <button>Continue {campaign.camp_name}</button>
          </Link>
          <Link to={`/newcharacter/${campaign.camp_id}`}>
            <button>New Character</button>
          </Link>
          <button>Edit</button>
          <button
            onClick={() => {
              this.props.deleteCampaign(campaign.camp_id);
            }}
          >
            Delete
          </button>
          <hr />
        </div>
      );
    });

    // let party =

    return (
      <div>
        <Header />

        <h1>Home</h1>

        <hr />
        <div>
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

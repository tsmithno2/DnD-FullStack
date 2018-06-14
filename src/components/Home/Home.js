import React, { Component } from "react";
import Header from "../Header/Header";
import { getUser, displayCampaigns } from "../../dux/reducer";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.displayCampaigns();
  }

  render() {
    // let partyMembers= this.props.  this will be mapping the array returned that is a join of users to campaigns to parties to characters where the user_id is the same the camp_id is the same and the party is the same

    let campaigns = this.props.campaignsList.map((campaign, i) => {
      return (
        <div key={`campagin id ${i}`}>
          <h3>Campaign #{i + 1}</h3>
          <img src={campaign.camp_picture} alt="" />
          <p>Campign Name: {campaign.camp_name}</p>
          <p>Quick Description: {campaign.camp_desc1}</p>
          <h3>Party Members</h3>
          <hr />
        </div>
      );
    });

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
    user: state.user, //name on the object coming from the server: how we refference it
    campaignsList: state.campaignsList
  };
}

export default connect(
  mapStateToProps,
  { getUser, displayCampaigns }
)(Home);

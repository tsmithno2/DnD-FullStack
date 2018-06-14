import React, { Component } from "react";
import Header from "../Header/Header";
import { getUser, displayCampaigns } from "../../dux/reducer";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      list: []
    };
  }

  componentDidMount() {
    this.props
      .getUser()

      .then(() => {
        this.props.displayCampaigns(this.props.user.user_id);
      });
  }

  render() {
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

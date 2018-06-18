import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "axios";

//this.props.match.params aways a string passed in in home on the button. relates to the campaign id which will
//+this.props.match.params if a number,
export default class Playing extends Component {
  constructor() {
    super();
    this.state = {
      campaign: [],
      party: [],
      allOtherCharacters: []
    };
  }

  componentDidMount() {
    axios
      .post("/api/getcampaign/", {
        camp_id: +this.props.match.params.campaignid
      })
      .then(res => {
        console.log("res.data playing", res.data);
        this.setState({
          campaign: res.data
        });
        console.log("this.state.campaign in playing ", this.state.campaign);
      });
    // .post("");
  }

  render() {
    let campaignMap = this.state.campaign.map((campaign, i) => {
      return (
        <div key={"displayed campaign"}>
          <h1>Playing {campaign.camp_name}</h1>
          <img src={campaign.camp_picture} alt="" />
          <p>Full Description: {campaign.camp_desc2}</p>
        </div>
      );
    });
    return (
      <div>
        <Header />
        {campaignMap}
      </div>
    );
  }
}

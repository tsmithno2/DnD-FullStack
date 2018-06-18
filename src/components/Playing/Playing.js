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
        this.setState({
          campaign: res.data
        });
      });
    axios
      .post("/api/getpartymembers", {
        camp_id: +this.props.match.params.campaignid
      })
      .then(res => {
        console.log("party members log ", res.data);
        this.setState({
          party: res.data
        });
      });
  }

  render() {
    let campaignMap = this.state.campaign.map(campaign => {
      return (
        <div key={"displayed campaign"}>
          <h1>Playing {campaign.camp_name}</h1>
          <img src={campaign.camp_picture} alt="" />
          <p>Full Description: {campaign.camp_desc2}</p>
        </div>
      );
    });

    let partyMapped = this.state.party.map((party, i) => {
      console.log("render log ", party);
      return (
        <div key={`party ${i}`}>
          <hr />
          <div key={"stats"}>
            <img src={party.char_picture} alt="" />
          </div>
        </div>
      );
    });

    return (
      <div>
        <Header />
        {campaignMap}
        <hr />
        <br />
        <h2>Party Members</h2>
        {partyMapped}
      </div>
    );
  }
}

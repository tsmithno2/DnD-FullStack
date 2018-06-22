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
    axios
      .post("/api/getnpcs", {
        camp_id: +this.props.match.params.campaignid
      })
      .then(res => {
        this.setState({
          allOtherCharacters: res.data
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
      console.log(party);
      if (party.party_id !== null && party.char_pc === false) {
        return (
          <div key={`party ${i}`}>
            <hr />
            <div key={"stats"}>
              <img src={party.char_picture} alt="" />
              <h3>NPC</h3>
              <p>Name : {party.char_name} </p>
              <p>Alignment : {party.char_alignment} </p>
              <p>Deity : {party.char_deity} </p>
              <p>Strength : {party.char_strength} </p>
              <p>Dexterity : {party.char_dexterity} </p>
              <p>Constitution : {party.char_constitution} </p>
              <p>Intelligence : {party.char_intelligence} </p>
              <p>Wisdom : {party.char_wisdom} </p>
              <p>Charisma : {party.char_charisma} </p>
              <p>Inventory : {party.char_inventory} </p>
              <p>Notes : {party.char_dm_notes} </p>
            </div>
          </div>
        );
      } else if (party.party_id !== null && party.char_pc === true) {
        return (
          <div key={`party ${i}`}>
            <hr />
            <div key={"stats"}>
              <img src={party.char_picture} alt="" />
              <p>Name : {party.char_name}</p>
              <p>Alignment : {party.char_alignment} </p>
              <p>Deity : {party.char_deity} </p>
              <p>Strength : {party.char_strength} </p>
              <p>Dexterity : {party.char_dexterity} </p>
              <p>Constitution : {party.char_constitution} </p>
              <p>Intelligence : {party.char_intelligence} </p>
              <p>Wisdom : {party.char_wisdom} </p>
              <p>Charisma : {party.char_charisma} </p>
              <p>Inventory : {party.char_inventory} </p>
              <p>Notes : {party.char_dm_notes} </p>
            </div>
          </div>
        );
      }
    });

    let npcsMapped = this.state.allOtherCharacters.map((npcs, i) => {
      return (
        <div key={`npcs ${i}`}>
          <img src={npcs.char_picture} alt="" />
          <p>Name: {npcs.char_name}</p>
          <p>Alignment : {npcs.char_alignment} </p>
          <p>Deity : {npcs.char_deity} </p>
          <p>Strength : {npcs.char_strength} </p>
          <p>Dexterity : {npcs.char_dexterity} </p>
          <p>Constitution : {npcs.char_constitution} </p>
          <p>Intelligence : {npcs.char_intelligence} </p>
          <p>Wisdom : {npcs.char_wisdom} </p>
          <p>Charisma : {npcs.char_charisma} </p>
          <p>Inventory : {npcs.char_inventory} </p>
          <p>Notes : {npcs.char_dm_notes} </p>
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
        <hr />
        <br />
        <h2>NPC's</h2>
        {npcsMapped}
      </div>
    );
  }
}

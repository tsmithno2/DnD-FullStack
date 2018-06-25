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
      allOtherCharacters: [],
      unobtainedQuests: [],
      obQuests: [],
      completedQuests: []
    };
    this.handleDelete = this.handleDelete.bind(this);
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
    axios
      .post("/api/getunobquests", {
        camp_id: +this.props.match.params.campaignid
      })
      .then(res => {
        this.setState({
          unobtainedQuests: res.data
        });
      });
    axios
      .post("/api/getobquests", {
        camp_id: +this.props.match.params.campaignid
      })
      .then(res => {
        this.setState({
          obQuests: res.data
        });
      });
    axios
      .post("/api/getcompquests", {
        camp_id: +this.props.match.params.campaignid
      })
      .then(res => {
        this.setState({
          completedQuests: res.data
        });
      });
  }

  handleDelete(char_id) {
    console.log("delete function ", char_id);
    axios.delete(`/api/deletecharacter?char_id=${char_id}`).then(res => {
      // eslint-disable-next-line
      res.data.map(character => {
        if (character.party_id !== null && character.char_pc === false) {
          this.setState({
            party: character
          });
        } else if (character.party_id !== null && character.char_pc === true) {
          this.setState({
            party: character
          });
        } else {
          this.setState({
            allOtherCharacters: character
          });
        }
      });
    });
    this.componentDidMount();
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

    // eslint-disable-next-line
    let partyMapped = this.state.party.map((party, i) => {
      if (party.party_id !== null && party.char_pc === false) {
        return (
          <div key={`party ${i}`}>
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
              <button onClick={console.log("RIGHT HERE 1", this.state)}>
                Update Info
              </button>
              <button
                onClick={() => {
                  this.handleDelete(party.char_id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      } else if (party.party_id !== null && party.char_pc === true) {
        return (
          <div key={`party ${i + 1}`}>
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
              <button
                onClick={() => {
                  console.log("RIGHT HERE 2", this.state);
                }}
              >
                Update Info
              </button>
              <button
                onClick={() => {
                  console.log(party.char_id);
                  this.handleDelete(party.char_id);
                }}
              >
                Delete
              </button>
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
          <button
            onClick={() => {
              console.log("RIGHT HERE 3", this.state);
            }}
          >
            Update Info
          </button>
          <button
            onClick={() => {
              this.handleDelete(npcs.char_id);
            }}
          >
            Delete
          </button>
        </div>
      );
    });

    let unobQuestsMapped = this.state.unobtainedQuests.map((quest, i) => {
      return (
        <div key={i}>
          <img src={quest.quest_picture} alt="" />
          <p>Name: {quest.quest_name}</p>
          <p>Description: {quest.quest_description}</p>
          <button>Move to Obtained</button>
          <button>move to Completed</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    });

    let obQuestsMapped = this.state.obQuests.map((quest, i) => {
      return (
        <div key={"ob " + i}>
          <img src={quest.quest_picture} alt="" />
          <p>Name: {quest.quest_name}</p>
          <p>Description: {quest.quest_description}</p>
          <button>Move to Unobtained</button>
          <button>Move to Completed</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    });

    let comQuestsMapped = this.state.completedQuests.map((quest, i) => {
      return (
        <div key={"com " + i}>
          <img src={quest.quest_picture} alt="" />
          <p>Name: {quest.quest_name}</p>
          <p>Description: {quest.quest_description}</p>
          <button>Move to Obtained</button>
          <button>Move to Unobtained</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <Header />
        {campaignMap}
        <hr />
        <br />

        <div key="party">
          <h2>Party Members</h2>
          {partyMapped}
          <hr />
          <br />
        </div>

        <div key="npcs">
          <h2>NPC's</h2>
          {npcsMapped}
          <hr />
          <br />
        </div>

        <div key="Unobtained Quests">
          <h2>Unobtained Quests</h2>
          {unobQuestsMapped}
          <hr />
          <br />
        </div>

        <div key="Obtained Quests">
          <h2>Obtained, Though Not Completed Quests</h2>
          {obQuestsMapped}
          <hr />
          <br />
        </div>

        <div key="Completed Quests">
          <h2>Completed Quests</h2>
          {comQuestsMapped}
          <hr />
          <br />
        </div>
      </div>
    );
  }
}

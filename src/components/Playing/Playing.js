import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NpcsMapped from "./PlayingComponents/NpcsMapped";
import PartyPcsMapped from "./PlayingComponents/PartyPcsMapped";
import PartyNpcsMapped from "./PlayingComponents/PartyNpcsMapped";
import UnobQuestsMap from "./PlayingComponents/UnobQuestsMap";
import ObQuestsMap from "./PlayingComponents/ObQuestsMap";
import CompQuestsMap from "./PlayingComponents/CompQuestsMap";
import "./Playing.css";

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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteQuest = this.handleDeleteQuest.bind(this);
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
    axios.delete(`/api/deletecharacter?char_id=${char_id}`);
    this.componentDidMount();
  }

  handleDeleteQuest(quest_id) {
    axios.delete(`/api/deletequest?quest_id=${quest_id}`);
    this.componentDidMount();
  }

  render() {
    let campaignMap = this.state.campaign.map(campaign => {
      return (
        <div key="CampMap">
          <h2>Playing {campaign.camp_name}</h2>
          <img src={campaign.camp_picture} alt="" height="300" width="300" />
          <p>Full Description: {campaign.camp_desc2}</p>
        </div>
      );
    });

    let partyMapped = this.state.party.map((party, i) => {
      if (party.party_id !== null && party.char_pc === true) {
        return (
          <div key={i} className="StandardCard">
            <PartyPcsMapped
              char_id={party.char_id}
              char_picture={party.char_picture}
              char_name={party.char_name}
              char_alignment={party.char_alignment}
              char_deity={party.char_deity}
              char_strength={party.char_strength}
              char_dexterity={party.char_dexterity}
              char_constitution={party.char_constitution}
              char_intelligence={party.char_intelligence}
              char_wisdom={party.char_wisdom}
              char_charisma={party.char_charisma}
              char_inventory={party.char_inventory}
              char_dm_notes={party.char_dm_notes}
              keyi={i}
              handleDelete={this.handleDelete}
              componentDidMount={this.componentDidMount}
            />
          </div>
        );
      } else if (party.party_id !== null && party.char_pc === false) {
        return (
          <div key={"party npc" + i} className="StandardCard">
            <PartyNpcsMapped
              char_id={party.char_id}
              char_picture={party.char_picture}
              party_id={party.party_id}
              char_npc={party.char_npc}
              char_name={party.char_name}
              char_alignment={party.char_alignment}
              char_deity={party.char_deity}
              char_strength={party.char_strength}
              char_dexterity={party.char_dexterity}
              char_constitution={party.char_constitution}
              char_intelligence={party.char_intelligence}
              char_wisdom={party.char_wisdom}
              char_charisma={party.char_charisma}
              char_inventory={party.char_inventory}
              char_dm_notes={party.char_dm_notes}
              keyi={i}
              handleDelete={this.handleDelete}
              componentDidMount={this.componentDidMount}
            />
          </div>
        );
      }
    });

    let npcsMapped = this.state.allOtherCharacters.map((npcs, i) => {
      return (
        <div key={"npc " + i} className="StandardCard">
          <NpcsMapped
            char_id={npcs.char_id}
            char_picture={npcs.char_picture}
            party_id={npcs.party_id}
            camp_id={npcs.camp_id}
            char_npc={npcs.char_npc}
            char_name={npcs.char_name}
            char_alignment={npcs.char_alignment}
            char_deity={npcs.char_deity}
            char_strength={npcs.char_strength}
            char_dexterity={npcs.char_dexterity}
            char_constitution={npcs.char_constitution}
            char_intelligence={npcs.char_intelligence}
            char_wisdom={npcs.char_wisdom}
            char_charisma={npcs.char_charisma}
            char_inventory={npcs.char_inventory}
            char_dm_notes={npcs.char_dm_notes}
            keyi={i}
            handleDelete={this.handleDelete}
            componentDidMount={this.componentDidMount}
          />
        </div>
      );
    });

    let unobQuestsMapped = this.state.unobtainedQuests.map((quest, i) => {
      return (
        <div key={"unobQuests " + i} className="QuestCard">
          <UnobQuestsMap
            quest_id={quest.quest_id}
            quest_name={quest.quest_name}
            quest_description={quest.quest_description}
            quest_picture={quest.quest_picture}
            quest_obtained={quest.quest_obtained}
            quest_completed={quest.quest_completed}
            keyi={i}
            handleDeleteQuest={this.handleDeleteQuest}
            componentDidMount={this.componentDidMount}
          />
        </div>
      );
    });

    let obQuestsMapped = this.state.obQuests.map((quest, i) => {
      return (
        <div key={"obQuests" + i} className="QuestCard">
          <ObQuestsMap
            quest_id={quest.quest_id}
            quest_name={quest.quest_name}
            quest_description={quest.quest_description}
            quest_picture={quest.quest_picture}
            quest_obtained={quest.quest_obtained}
            quest_completed={quest.quest_completed}
            keyi={i}
            handleDeleteQuest={this.handleDeleteQuest}
            componentDidMount={this.componentDidMount}
          />
        </div>
      );
    });

    let comQuestsMapped = this.state.completedQuests.map((quest, i) => {
      return (
        <div key={"compQuests" + i} className="QuestCard">
          <CompQuestsMap
            quest_id={quest.quest_id}
            quest_name={quest.quest_name}
            quest_description={quest.quest_description}
            quest_picture={quest.quest_picture}
            quest_obtained={quest.quest_obtained}
            quest_completed={quest.quest_completed}
            keyi={i}
            handleDeleteQuest={this.handleDeleteQuest}
            componentDidMount={this.componentDidMount}
          />
        </div>
      );
    });
    return (
      <div className="FullDisplay">
        <div className="TopBit">
          <div className="CampInfo">{campaignMap}</div>
        </div>

        <div className="LeftVsRight">
          <div className="Left">
            <div className="Party">
              <h2>Party Members</h2>
              {partyMapped}

              <br />
            </div>
          </div>
          <div className="Npcs">
            <h2>NPC's</h2>
            {npcsMapped}

            <br />
          </div>
          <div className="Right">
            <div className="QuestsMapped">
              <div>
                <h2>Quests</h2>
                <Link to={`/newquest/${+this.props.match.params.campaignid}`}>
                  <button>New Quest</button>
                </Link>
              </div>

              <div key="Quests">
                <h3>Unobtained Quests</h3>
                {unobQuestsMapped}
                <br />
              </div>

              <div key="ObQuests">
                <h3>Obtained Quests</h3>
                {obQuestsMapped}
                <br />
              </div>

              <div key="CompQuests">
                <h3>Completed Quests</h3>
                {comQuestsMapped}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

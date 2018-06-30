import React, { Component } from "react";
import axios from "axios";

export default class UnobQuestsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quest_id: "",
      quest_name: "",
      quest_description: "",
      quest_picture: "",
      quest_obtained: "",
      quest_completed: "",
      editToggle: false
    };
    this.clickEdit = this.clickEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickSave = this.clickSave.bind(this);
  }

  componentDidMount() {
    this.setState({
      quest_id: this.props.quest_id,
      quest_name: this.props.quest_name,
      quest_description: this.props.quest_description,
      quest_picture: this.props.quest_picture,
      quest_obtained: this.props.quest_obtained,
      quest_completed: this.props.quest_completed
    });
  }

  clickEdit() {
    this.setState({
      editToggle: !this.state.editToggle
    });
    console.log("edit toggle ", this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clickSave() {
    console.log("saved state ", this.state);
    axios.put("/api/updateobquests", {
      quest_id: this.state.quest_id,
      quest_name: this.state.quest_name,
      quest_description: this.state.quest_description,
      quest_picture: this.state.quest_picture,
      quest_obtained: this.state.quest_obtained,
      quest_completed: this.state.quest_completed
    });
    this.clickEdit();
  }

  moveQuestToUnobtained() {
    axios.put("/api/updatecompquests", {
      quest_id: this.state.quest_id,
      quest_name: this.state.quest_name,
      quest_description: this.state.quest_description,
      quest_picture: this.state.quest_picture,
      quest_obtained: false,
      quest_completed: false
    });
  }

  moveQuestToObtained() {
    axios.put("/api/updateunobquests", {
      quest_id: this.state.quest_id,
      quest_name: this.state.quest_name,
      quest_description: this.state.quest_description,
      quest_picture: this.state.quest_picture,
      quest_obtained: true,
      quest_completed: false
    });
  }

  render() {
    return (
      <div key={`comp ${this.props.keyi}`}>
        {this.state.editToggle ? (
          <div>
            <input
              name="quest_name"
              value={this.state.quest_name}
              onChange={this.handleChange}
            />
            <input
              name="quest_description"
              value={this.state.quest_description}
              onChange={this.handleChange}
            />
            <input
              name="quest_picture"
              value={this.state.quest_picture}
              onChange={this.handleChange}
            />
          </div>
        ) : (
          <div>
            <img
              src={this.state.quest_picture}
              alt=""
              height="200"
              width="200"
            />
            <p>Quest Name</p>
            <p>{this.state.quest_name}</p>
            <p>Quest Description</p>
            <p>{this.state.quest_description}</p>
          </div>
        )}
        <button onClick={() => this.clickEdit()}>Update Info</button>
        <button
          onClick={() => {
            this.props.handleDeleteQuest(this.props.quest_id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            this.moveQuestToUnobtained();
          }}
        >
          Move to Unobtained Quests
        </button>
        <button
          onClick={() => {
            this.moveQuestToObtained();
          }}
        >
          Move To Obtained Quests
        </button>

        <button
          onClick={() => {
            this.clickSave();
          }}
        >
          Save Changes
        </button>
        <br />
      </div>
    );
  }
}

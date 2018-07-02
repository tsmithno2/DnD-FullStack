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
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clickSave() {
    axios.put("/api/updateunobquests", {
      quest_id: this.state.quest_id,
      quest_name: this.state.quest_name,
      quest_description: this.state.quest_description,
      quest_picture: this.state.quest_picture,
      quest_obtained: this.state.quest_obtained,
      quest_completed: this.state.quest_completed
    });
    this.clickEdit();
  }

  moveQuestToObtained() {
    axios.put("/api/updateunobquests", {
      quest_id: this.state.quest_id,
      quest_name: this.state.quest_name,
      quest_description: this.state.quest_description,
      quest_picture: this.state.quest_picture,
      quest_obtained: true,
      quest_completed: this.state.quest_completed
    });
  }

  moveQuestToCompleted() {
    axios.put("/api/updateunobquests", {
      quest_id: this.state.quest_id,
      quest_name: this.state.quest_name,
      quest_description: this.state.quest_description,
      quest_picture: this.state.quest_picture,
      quest_obtained: true,
      quest_completed: true
    });
  }

  render() {
    return (
      <div key={`unob ${this.props.keyi}`}>
        {this.state.editToggle ? (
          <div>
            <h3>Quest Picture</h3>
            <p>
              <input
                name="quest_picture"
                value={this.state.quest_picture}
                onChange={this.handleChange}
              />
            </p>
            <h3>Quest Name</h3>
            <p>
              <input
                name="quest_name"
                value={this.state.quest_name}
                onChange={this.handleChange}
              />
            </p>
            <h3>Quest Description</h3>
            <p>
              <input
                name="quest_description"
                value={this.state.quest_description}
                onChange={this.handleChange}
              />
            </p>
          </div>
        ) : (
          <div>
            <img
              src={this.state.quest_picture}
              alt=""
              height="200"
              width="200"
            />
            <h3>Quest Name</h3>
            <p>{this.state.quest_name}</p>
            <h3>Quest Description</h3>
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
            this.moveQuestToObtained();
          }}
        >
          Move To Obtained Quests
        </button>
        <button
          onClick={() => {
            this.moveQuestToCompleted();
          }}
        >
          Move To Completed Quests
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

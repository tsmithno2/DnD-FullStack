import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./NewQuest.css";

export default class NewQuest extends Component {
  constructor() {
    super();
    this.state = {
      camp_id: "",
      quest_name: "",
      quest_description: "",
      quest_picture: "",
      quest_obtained: false,
      quest_completed: false
    };
  }
  componentDidMount() {
    this.setState({
      camp_id: +this.props.match.params.campaignid
    });
  }

  clickCancel() {
    this.setState({
      quest_name: "",
      quest_picture: "",
      quest_description: "",
      quest_obtained: false,
      quest_completed: false
    });
  }

  dropdown(e) {
    if (e.target.value === "Obtained") {
      this.setState({
        quest_obtained: true
      });
    } else if (e.target.value === "Completed") {
      this.setState({
        quest_obtained: true,
        quest_completed: true
      });
    }
  }

  clickSave() {
    axios.post("/api/createquest", {
      camp_id: this.state.camp_id,
      quest_name: this.state.quest_name,
      quest_description: this.state.quest_description,
      quest_picture: this.state.quest_picture,
      quest_obtained: this.state.quest_obtained,
      quest_completed: this.state.quest_completed
    });
  }

  render() {
    return (
      <div className="FullNewQuest">
        <div className="NewQuestCard">
          <h1>Create New Quest</h1>
          <p>
            Quest Name:
            <input
              value={this.state.quest_name}
              onChange={e => this.setState({ quest_name: e.target.value })}
            />
          </p>
          <p>
            Quest Picture:
            <input
              value={this.state.quest_picture}
              onChange={e => this.setState({ quest_picture: e.target.value })}
            />
          </p>
          <p>
            Quest Description:
            <input
              value={this.state.quest_description}
              onChange={e =>
                this.setState({ quest_description: e.target.value })
              }
            />
          </p>
          <select
            onChange={e => {
              this.dropdown(e);
            }}
          >
            <option value="Unobtained">Unobtained</option>
            <option value="Obtained">Obtained</option>
            <option value="Completed">Completed</option>
          </select>
          <div>
            <Link to={`/playing/${this.state.camp_id}`}>
              <button onClick={() => this.clickSave()}>Save</button>
            </Link>
            <button onClick={() => this.clickCancel()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

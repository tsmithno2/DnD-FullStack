import React, { Component } from "react";
import axios from "axios";
import "../Playing.css";

export default class PartyNpcsMapped extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char_id: "",
      char_picture: "",
      party_id: "",
      char_npc: "",
      char_name: "",
      char_alignment: "",
      char_deity: "",
      char_strength: "",
      char_dexterity: "",
      char_constitution: "",
      char_intelligence: "",
      char_wisdom: "",
      char_charisma: "",
      char_inventory: "",
      char_dm_notes: "",
      editToggle: false
    };
    this.clickEdit = this.clickEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickSave = this.clickSave.bind(this);
  }

  componentDidMount() {
    this.setState({
      char_id: this.props.char_id,
      char_picture: this.props.char_picture,
      char_name: this.props.char_name,
      char_alignment: this.props.char_alignment,
      char_deity: this.props.char_deity,
      char_strength: this.props.char_strength,
      char_dexterity: this.props.char_dexterity,
      char_constitution: this.props.char_constitution,
      char_intelligence: this.props.char_intelligence,
      char_wisdom: this.props.char_wisdom,
      char_charisma: this.props.char_charisma,
      char_inventory: this.props.char_inventory,
      char_dm_notes: this.props.char_dm_notes
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
    axios.put("/api/updatepartynpcs", {
      char_id: this.state.char_id,
      char_name: this.state.char_name,
      char_picture: this.state.char_picture,
      char_alignment: this.state.char_alignment,
      char_deity: this.state.char_deity,
      char_strength: this.state.char_strength,
      char_dexterity: this.state.char_dexterity,
      char_constitution: this.state.char_constitution,
      char_intelligence: this.state.char_intelligence,
      char_wisdom: this.state.char_wisdom,
      char_charisma: this.state.char_charisma,
      char_inventory: this.state.char_inventory,
      char_dm_notes: this.state.char_dm_notes
    });
    this.clickEdit();
  }

  removeFromParty() {
    axios.put("/api/removefromparty", {
      char_id: this.state.char_id,
      party_id: null,
      char_name: this.state.char_name,
      char_picture: this.state.char_picture,
      char_alignment: this.state.char_alignment,
      char_deity: this.state.char_deity,
      char_strength: this.state.char_strength,
      char_dexterity: this.state.char_dexterity,
      char_constitution: this.state.char_constitution,
      char_intelligence: this.state.char_intelligence,
      char_wisdom: this.state.char_wisdom,
      char_charisma: this.state.char_charisma,
      char_inventory: this.state.char_inventory,
      char_dm_notes: this.state.char_dm_notes,
      editToggle: false
    });
    window.location.reload();
  }

  render() {
    return (
      <div key={`npcs ${this.props.keyi}`}>
        {this.state.editToggle ? (
          <div className="Editing">
            <p>
              Picture:{" "}
              <input
                name="char_picture"
                value={this.state.char_picture}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Name:{" "}
              <input
                name="char_name"
                value={this.state.char_name}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Alignment :{" "}
              <input
                name="char_alignment"
                value={this.state.char_alignment}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Deity :{" "}
              <input
                name="char_deity"
                value={this.state.char_deity}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Strength :{" "}
              <input
                name="char_strength"
                value={this.state.char_strength}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Dexterity :{" "}
              <input
                name="char_dexterity"
                value={this.state.char_dexterity}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Constitution :{" "}
              <input
                name="char_constitution"
                value={this.state.char_constitution}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Intelligence :{" "}
              <input
                name="char_intelligence"
                value={this.state.char_intelligence}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Wisdom :{" "}
              <input
                name="char_wisdom"
                value={this.state.char_wisdom}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Charisma :{" "}
              <input
                name="char_charisma"
                value={this.state.char_charisma}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Inventory :{" "}
              <input
                name="char_inventory"
                value={this.state.char_inventory}
                onChange={this.handleChange}
              />
            </p>
            <p>
              Notes :{" "}
              <input
                name="char_dm_notes"
                value={this.state.char_dm_notes}
                onChange={this.handleChange}
              />
            </p>
          </div>
        ) : (
          <div>
            <p>NPC</p>
            <img
              src={this.state.char_picture}
              alt=""
              height="200"
              width="200"
            />
            <p>Name: {this.state.char_name}</p>
            <p>Alignment : {this.state.char_alignment} </p>
            <p>Deity : {this.state.char_deity} </p>
            <p>Strength : {this.state.char_strength} </p>
            <p>Dexterity : {this.state.char_dexterity} </p>
            <p>Constitution : {this.state.char_constitution} </p>
            <p>Intelligence : {this.state.char_intelligence} </p>
            <p>Wisdom : {this.state.char_wisdom} </p>
            <p>Charisma : {this.state.char_charisma} </p>
            <p>Inventory : {this.state.char_inventory} </p>
            <p>Notes : {this.state.char_dm_notes} </p>
          </div>
        )}
        <button onClick={() => this.clickEdit()}>Update Info</button>
        <button
          onClick={() => {
            this.props.handleDelete(this.props.char_id);
          }}
        >
          Delete
        </button>

        <button
          onClick={() => {
            this.clickSave();
          }}
        >
          Save Changes
        </button>
        <button
          onClick={() => {
            this.removeFromParty();
          }}
        >
          Remove From Party
        </button>
      </div>
    );
  }
}

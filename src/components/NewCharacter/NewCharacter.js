import React, { Component } from "react";
import Header from "../Header/Header";

export default class NewCharacter extends Component {
  constructor() {
    super();
    this.state = {
      NPC: false,
      playerCharacter: false,
      name: "",
      gender: "",
      picture: "",
      class: "",
      alignment: "",
      deity: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      notes: ""
    };
  }

  clickCancel() {
    this.setState({
      NPC: false,
      playerCharacter: false,
      name: "",
      gender: "",
      picture: "",
      class: "",
      alignment: "",
      deity: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      notes: ""
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>New Character</h1>
        <hr />
        <br />
        <div>
          {" "}
          <p>
            NPC
            <input
              value={this.state.NPC}
              onChange={() => this.setState({ NPC: !this.state.NPC })}
              type="checkbox"
            />
          </p>
          <p>
            Picture{" "}
            <input
              value={this.state.picture}
              onChange={e => this.setState({ picture: e.target.value })}
            />
          </p>
          <p>
            Character Name{" "}
            <input
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </p>
          <p>
            Gender{" "}
            <input
              value={this.state.gender}
              onChange={e => this.setState({ gender: e.target.value })}
            />
          </p>
          <p>
            Class{" "}
            <input
              value={this.state.class}
              onChange={e => this.setState({ class: e.target.value })}
            />
          </p>
          <p>
            Alignment{" "}
            <input
              value={this.state.alignment}
              onChange={e => this.setState({ alignment: e.target.value })}
            />
          </p>
          <p>
            Deity{" "}
            <input
              value={this.state.deity}
              onChange={e => this.setState({ deity: e.target.value })}
            />
          </p>
        </div>

        <div>
          <br />
          <p>Character Sheet</p>

          <p>
            Strength{" "}
            <input
              value={this.state.strength}
              onChange={e => this.setState({ strength: e.target.value })}
            />
          </p>

          <p>
            Dexterity{" "}
            <input
              value={this.state.dexterity}
              onChange={e => this.setState({ dexterity: e.target.value })}
            />
          </p>

          <p>
            Constitution{" "}
            <input
              value={this.state.constitution}
              onChange={e => this.setState({ constitution: e.target.value })}
            />
          </p>

          <p>
            Intelligence{" "}
            <input
              value={this.state.intelligence}
              onChange={e => this.setState({ intelligence: e.target.value })}
            />
          </p>

          <p>
            Wisdom{" "}
            <input
              value={this.state.wisdom}
              onChange={e => this.setState({ wisdom: e.target.value })}
            />
          </p>

          <p>
            Charisma{" "}
            <input
              value={this.state.charisma}
              onChange={e => this.setState({ charisma: e.target.value })}
            />
          </p>
          <br />
        </div>
        <div>
          {" "}
          <p>
            Notes{" "}
            <input
              value={this.state.notes}
              onChange={e => this.setState({ notes: e.target.value })}
            />
          </p>
        </div>

        <button onClick={() => console.log(this.state)}> Save </button>
        <button onClick={() => this.clickCancel()}> Cancel </button>
      </div>
    );
  }
}

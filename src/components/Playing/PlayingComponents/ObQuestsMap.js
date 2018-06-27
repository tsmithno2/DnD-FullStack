import React, { Component } from "react";

export default class NpcsMapped extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char_id: "",
      char_picture: "",
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
      char_dm_notes: ""
    };
  }
}

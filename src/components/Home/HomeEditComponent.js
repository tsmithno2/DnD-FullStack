import React, { Component } from "react";
import "./HomeComponents.css";

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camp_id: this.props.camp_id,
      camp_picture: "",
      camp_name: "",
      camp_desc1: "",
      camp_desc2: ""
    };
  }

  render() {
    console.log("modal ", this.props.camp_id);
    return (
      <div className={"EditModal"}>
        <div className={"Modal"}>
          <button
            className="ButtonX"
            onClick={() => {
              this.props.handleEdit();
            }}
          >
            X
          </button>
          <div className="inputs">
            <h2>Edit {this.props.camp_name}</h2>
            <p>
              Campaign Picture (URL's ONLY):
              <br />{" "}
              <input
                value={this.props.camp_picture}
                onChange={e => this.setState({ camp_picture: e.target.value })}
              />
            </p>
            <br />

            <p>
              Campaign Name:
              <br />
              <input
                value={this.props.camp_name}
                onChange={e => this.setState({ camp_name: e.target.value })}
              />
            </p>
            <br />

            <p>
              One Senence Campaign Description:
              <br />
              <input
                value={this.props.camp_desc1}
                onChange={e => this.setState({ camp_desc1: e.target.value })}
              />
            </p>
            <br />

            <p>
              Full Campaign Description:
              <br />
              <input
                value={this.props.camp_desc2}
                onChange={e => this.setState({ camp_desc2: e.target.value })}
              />
            </p>

            <br />
          </div>
        </div>
      </div>
    );
  }
}

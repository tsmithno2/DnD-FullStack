import React, { Component } from "react";
import "./HomeEditModal.css";
import axios from "axios";

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

  componentDidMount() {
    this.setState({
      camp_id: this.props.camp_id,
      camp_picture: this.props.camp_picture,
      camp_name: this.props.camp_name,
      camp_desc1: this.props.camp_desc1,
      camp_desc2: this.props.camp_desc2
    });
  }

  clickSave() {
    axios.put("api/updatecampaign", {
      camp_id: this.state.camp_id,
      camp_name: this.state.camp_name,
      camp_desc1: this.state.camp_desc1,
      camp_desc2: this.state.camp_desc2,
      camp_picture: this.state.camp_picture
    });
    this.props.clickEdit();
    this.props.componentDidMount();
  }

  clickCancel() {
    this.setState({
      camp_id: this.props.camp_id,
      camp_picture: this.props.camp_picture,
      camp_name: this.props.camp_name,
      camp_desc1: this.props.camp_desc1,
      camp_desc2: this.props.camp_desc2
    });
  }

  render() {
    return (
      <div className="EditModal">
        <div className="Modal">
          <div className="Inputs">
            <h2 className="EditModalTitle">Edit {this.state.camp_name}</h2>
            <p>
              Campaign Picture (URL's ONLY):
              <input
                value={this.state.camp_picture}
                onChange={e => this.setState({ camp_picture: e.target.value })}
              />
            </p>

            <p>
              Campaign Name:
              <br />
              <input
                value={this.state.camp_name}
                onChange={e => this.setState({ camp_name: e.target.value })}
              />
            </p>

            <p>
              One Senence Campaign Description:
              <input
                value={this.props.camp_desc1}
                onChange={e => this.setState({ camp_desc1: e.target.value })}
              />
            </p>

            <p>
              Full Campaign Description:
              <br />
              <input
                value={this.props.camp_desc2}
                onChange={e => this.setState({ camp_desc2: e.target.value })}
              />
            </p>
          </div>

          <div className="ModalButtons">
            <button
              className="SaveChangesButton"
              onClick={() => {
                this.clickSave();
              }}
            >
              Save Changes
            </button>
            <button
              className="ButtonX"
              onClick={() => {
                this.props.clickEdit();
              }}
            >
              Exit Not Saving Changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

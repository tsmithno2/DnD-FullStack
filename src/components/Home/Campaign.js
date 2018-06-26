import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditModal from "./HomeEditComponent";

export default class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(camp_id) {
    console.log(camp_id);

    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div>
        <h3>Campaign #{this.props.i + 1}</h3>
        <img src={this.props.campaign.camp_picture} alt="" />
        <p>Campign Name: {this.props.campaign.camp_name}</p>
        <p>Quick Description: {this.props.campaign.camp_desc1}</p>
        <Link to={`/playing/${this.props.campaign.camp_id}`}>
          <button>Continue {this.props.campaign.camp_name}</button>
        </Link>
        <Link to={`/newcharacter/${this.props.campaign.camp_id}`}>
          <button>New Character</button>
        </Link>
        <button
          onClick={() => {
            this.handleEdit(this.props.campaign.camp_id);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            this.props.deleteCampaign(this.props.campaign.camp_id);
          }}
        >
          Delete
        </button>

        <hr />
        {this.state.showModal ? (
          <EditModal
            handleEdit={this.handleEdit}
            camp_picture={this.props.campaign.camp_picture}
            camp_name={this.props.campaign.camp_name}
            camp_desc1={this.props.campaign.camp_desc1}
            camp_desc2={this.props.campaign.camp_desc2}
            camp_id={this.props.campaign.camp_id}
            componentDidMount={this.props.componentDidMount}
          />
        ) : null}
      </div>
    );
  }
}

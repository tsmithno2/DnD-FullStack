import React, { Component } from "react";
import { getUser } from "../../dux/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Header extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let { username, user_avatar } = this.props.user;

    return (
      <div>
        <h1>Header</h1>

        {username ? (
          <div>
            <p>WELCOME! {username}</p>
            <img src={user_avatar} alt="" />
          </div>
        ) : (
          <p>Please login</p>
        )}

        <Link to="/home">
          <button>Home</button>
        </Link>

        <Link to="/playing">
          <button>Playing</button>
        </Link>

        <Link to="/newcampaign">
          <button>New Campaign</button>
        </Link>

        <Link to="">
          <button>Log Out</button>
        </Link>

        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { getUser }
)(Header);

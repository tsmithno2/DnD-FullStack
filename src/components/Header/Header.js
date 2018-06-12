import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/playing">
        <button>Playing</button>
      </Link>

      <Link to="/newcampaign">
        <button>New Campaign</button>
      </Link>

      <Link to="/newcharacter">
        <button>New Character</button>
      </Link>

      <Link to="">
        <button>Log Out</button>
      </Link>

      <hr />
    </div>
  );
}

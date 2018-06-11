import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Playing from "../components/Playing/Playing";
import NewCampaign from "../components/NewCampaign/NewCampaign";
import NewCharacter from "../components/NewCharacter/NewCharacter";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/playing" component={Playing} />
    <Route path="/newcampaign" component={NewCampaign} />
    <Route path="/newcharacter" component={NewCharacter} />
  </Switch>
);

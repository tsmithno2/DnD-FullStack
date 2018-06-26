import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Playing from "../components/Playing/Playing";
import NewCampaign from "../components/NewCampaign/NewCampaign";
import NewCharacter from "../components/NewCharacter/NewCharacter";
import NewQuest from "../components/Quests/NewQuest/NewQuest";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/playing/:campaignid" component={Playing} />
    <Route path="/newcampaign" component={NewCampaign} />
    <Route path="/newcharacter/:campaignid" component={NewCharacter} />
    <Route path="/newquest/:campaignid" component={NewQuest} />
  </Switch>
);

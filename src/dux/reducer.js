import axios from "axios";

const initState = {
  user: {},
  campaignsList: [],
  partyList: [],
  newParty: []
};

const GET_USER_DATA = "GET_USER_DATA";
const DISPLAY_CAMPAIGNS = "DISPLAY_CAMPAIGNS";
const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
const GET_PARTIES = "GET_PARTIES";
const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_DATA + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });

    case DISPLAY_CAMPAIGNS + "_FULFILLED":
      return Object.assign({}, state, { campaignsList: action.payload });

    case GET_PARTIES + "_FULFILLED":
      return Object.assign({}, state, { partyList: action.payload });

    case CREATE_CAMPAIGN + "_FULFILLED":
      return Object.assign({}, state, { newPartyId: action.payload });

    case DELETE_CAMPAIGN + "_FULFILLED":
      return Object.assign({}, state, { campaignsList: action.payload });

    default:
      return state;
  }
}

export function getUser() {
  let userData = axios.get("/auth/user").then(res => {
    return res.data;
  });

  return {
    type: GET_USER_DATA,
    payload: userData
  };
}

export function getParties() {
  let partiesList = axios.get("/api/getparties").then(res => {
    return res.data;
  });
  return {
    type: GET_PARTIES,
    payload: partiesList
  };
}

export function displayCampaigns() {
  let campaignsList = axios.get(`/api/displaycampaigns`).then(res => {
    return res.data;
  });
  return {
    type: DISPLAY_CAMPAIGNS,
    payload: campaignsList
  };
}

export function createCampaign(newCamp) {
  let newParty = axios.post("/api/createcampaign/", newCamp).then(res => {
    return res.data;
  });
  return {
    type: CREATE_CAMPAIGN,
    payload: newParty
  };
}

export function deleteCampaign(camp_id) {
  let updatedCmapigns = axios
    .delete(`/api/deletecampaign?camp_id=${camp_id}`)
    .then(res => {
      return res.data;
    });
  return {
    type: DELETE_CAMPAIGN,
    payload: updatedCmapigns
  };
}

import axios from "axios";

const initState = {
  user: {},
  campaignsList: []
};

const GET_USER_DATA = "GET_USER_DATA";
const DISPLAY_CAMPAIGNS = "DISPLAY_CAMPAIGNS";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_DATA + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });

    case DISPLAY_CAMPAIGNS + "_FULFILLED":
      return;

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

export function displayCampaigns() {
  let campaigns = axios.get("/api/displaycampaigns").then(res => {
    return res.data;
  });
  return {
    type: DISPLAY_CAMPAIGNS,
    payload: campaigns
  };
}

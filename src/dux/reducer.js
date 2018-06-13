import axios from "axios";

const initState = {
  user: {}
};

const GET_USER_DATA = "GET_USER_DATA";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_DATA + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}

export function getUser() {
  let userData = axios.get("/auth/user").then(res => {
    console.log(res);
    return res.data;
  });
  return {
    type: GET_USER_DATA,
    payload: userData
  };
}

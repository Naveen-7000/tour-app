import {
    GET_CURRENT_USER,
    LOGIN_USER,
    LOGOUT_USER,
    SET_STACK_MODE,
  } from "../actions/types";
  import { getToken } from "../../extras/utils";

  const initState = {
    access_token: getToken(),
    user: null,
    loggedIn: false,
    stackMode: "default",
  };

  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          access_token: action.payload,
          loggedIn: true,
        };
      case GET_CURRENT_USER:
        return {
          ...state,
          user: action.payload,
        };
      case LOGOUT_USER:
        return {
          ...state,
          access_token: null,
          user: null,
          loggedIn: false,
        };
      case SET_STACK_MODE:
        return {
          ...state,
          stackMode: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
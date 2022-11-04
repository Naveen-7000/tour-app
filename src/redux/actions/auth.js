import {
    GET_CURRENT_USER,
    LOGIN_USER,
    LOGOUT_USER,
    SET_MATCH_ID,
    SET_STACK_MODE,
    SIGNUP_USER,
    IS_SAVED
  } from "./types";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getToken,removeTokens } from "../../extras/utils";
import {BASE_URL} from '../../../config';
import axios from "axios";

export const loginWithToken = (token) => {
    let finalToken = token;
    return function (dispatch) {
      AsyncStorage.setItem("access_token_tour", finalToken);
      dispatch({
        type: LOGIN_USER,
        payload: finalToken,
      });
    };
  };

  export const setAccessToken = (token) => {
    console.log(token, "lg-token");
    let finalToken = token;
    return (
      AsyncStorage.setItem("access_token_tour", finalToken)
    )
  };
  
  export const completeLogin = (token,isReload) => {
    return function (dispatch) {
      dispatch(loginWithToken(token));
      
      !isReload &&
        Alert.alert("Success", "Login Successful! Welcome to Tour Planner.");
        // dispatch(getCurrentUser(token));
    };
  };

export const setStackMode = (mode) => {
    return function (dispatch) {
      dispatch({
        type: SET_STACK_MODE,
        payload: mode,
      });
    };
  };

  export const loginUser = (loginData, setLoading) => {
    return function (dispatch) {
      setLoading(true);
      axios
        .post(`${BASE_URL}/login`, loginData)
        .then((response) => {
          dispatch(completeLogin(response?.data.token));
          setLoading(false);
          dispatch(setStackMode("default"));
        })
        .catch((response) => {
          console.log(response);
          setLoading(false);
          try {
            switch (response.status) {
              case 400:
                //   add a toast
                Alert.alert(
                  "Error",
                  "Invalid Username/password OR Account does not exist"
                );
                break;
              case 401:
                //   add a toast
                Alert.alert(
                  "Error",
                  "Invalid Phone Number / Account does not exist"
                );
                break;
              default:
                // server error
                Alert.alert("Error", "Server error");
                break;
            }
          } catch (e) {
            Alert.alert("Error", "Server error");
          }
        });
    };
  };

  export const signupUser = (signUpData, setLoading) => {
    return function (dispatch) {
      setLoading(true);
      axios
        .post(`${BASE_URL}/register`, signUpData)
        .then((response) => {
          console.log(response.data, "sign up");
          if (response.data.error) Alert.alert("Error", response.data.error);
          else dispatch(completeLogin(response.data.token));
          setLoading(false);
        })
        .catch((response) => {
          console.log(response);
          setLoading(false);
          try {
            switch (response.status) {
              case 400:
                //   add a toast
                Alert.alert(
                  "Error",
                  "Invalid Phone Number / Account does not exist"
                );
                break;
              case 401:
                //   add a toast
                Alert.alert(
                  "Error",
                  "Invalid Phone Number / Account does not exist"
                );
                break;
              default:
                // server error
                Alert.alert("Error", "Server error");
                break;
            }
          } catch (e) {
            Alert.alert("Error", "Server error");
          }
        });
    };
  };

  export const logoutUser = () => {
    return function (dispatch) {
      // remove stored tokens
      removeTokens();
  
      // LOGOUT_USER
      dispatch({
        type: LOGOUT_USER,
      });
  
      // remove all values
      // add Toast
    };
  };
  export const getCurrentUser = (token) => {
    return function (dispatch) {
      axios
        .get(`${BASE_URL}/getme`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          let data = response.data.user;
  
          // dispatch current_user data
          dispatch({
            type: GET_CURRENT_USER,
            payload: data,
          });
          
        });
    };
  };
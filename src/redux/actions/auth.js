import {
    GET_CURRENT_USER,
    LOGIN_USER,
    LOGOUT_USER,
    SET_MATCH_ID,
    SET_STACK_MODE,
    IS_SAVED
  } from "./types";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getToken,removeTokens } from "../../extras/utils";

export const loginWithToken = (token) => {
    console.log(token, "lg-token");
    let finalToken = token;
  
    return function (dispatch) {
      AsyncStorage.setItem("access_token_bearlyfe", finalToken);
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
      AsyncStorage.setItem("access_token_bearlyfe", finalToken)
    )
  };
  
  export const completeLogin = (token, isReload) => {
    return function (dispatch) {
      dispatch(loginWithToken(token));
      !isReload &&
        Alert.alert("Success", "Login Successful! Welcome to BearLyfe.");
      dispatch(getCurrentUser(token));
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
        .post(`${BASE_URL}/users/login`, loginData)
        .then((response) => {
          console.log(response);
          dispatch(completeLogin(response.data.token));
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
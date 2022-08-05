import AsyncStorage from "@react-native-async-storage/async-storage";

// checks if we have a token and it is not expired
export const checkAuth = () => {
  try {
    const access_token = AsyncStorage.getItem("access_token_bearlyfe");

    if (!access_token) {
      return false;
    }

    // decode the token
    const { exp } = jwt.decode(access_token);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }

    // valid token
    return true;
  } catch (e) {
    return false;
  }
};

// gets the token or return null and also makes sure if the token is valid
export const getToken = () => {
  if (checkAuth()) {
    return AsyncStorage.getItem("access_token_bearlyfe");
  }
  removeTokens();
  return null;
};




// fn to remove tokens
export const removeTokens = () => {
  AsyncStorage.removeItem("access_token_bearlyf");
  AsyncStorage.removeItem("refresh_token_bearlyf");
};

export function dateFormat(date) {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
}

export function timeFormat(date) {
  const today = new Date(date);
  let hh = today.getHours();
  let mm = today.getMinutes();

  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;

  return hh + ":" + mm;
}

export function dateIsValid(dateStr) {
  if (!dateStr) return false;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  const [day, month, year] = dateStr.split("/");

  // 👇️ format Date string as `yyyy-mm-dd`
  const isoFormattedStr = `${year}-${month}-${day}`;

  const date = new Date(isoFormattedStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(isoFormattedStr);
}

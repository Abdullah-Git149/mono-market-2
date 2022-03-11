import {
  SET_LOADER,
  CLOSE_LOADER,
  REGISTER_ERRORS,
  SET_TOKEN,
  LOGIN_ERROR,
} from "../types/UsetTypes";
import jwt_decode from "jwt-decode";
const initState = {
  loading: false,
  registerErrors: [],
  loginErrors: [],
  token: "",
  user: "",
  redirect: false,
  message: ""
};

const verifyToken = (token) => {
  const decodeToken = jwt_decode(token);
  const expiresIn = new Date(decodeToken.exp * 1000);
  if (new Date() > expiresIn) {
    localStorage.removeItem("mytoken");
  } else {
    return decodeToken;
  }
  // else {
  //   initState.token = token;
  //   const { user } = decodeToken;
  //   console.log("user", user);
  // }
};

const token = localStorage.getItem("mytoken");
if (token) {
  const decoded = verifyToken(token);
  initState.token = token;
  console.log("hahaha", decoded);
  const { user } = decoded;
  initState.user = user;
}
const AuthReducer = (state = initState, action) => {
  if (action.type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (action.type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (action.type === REGISTER_ERRORS) {
    return { ...state, registerErrors: action.payload };
  } else if (action.type === LOGIN_ERROR) {
    return { ...state, loginErrors: action.payload };
  } else if (action.type === SET_TOKEN) {
    const decoded = verifyToken(action.payload);
    const { user } = decoded;
    return { ...state, token: action.payload, user: user };
  } else if (action.type === "LOGOUT_USER") {
    return { ...state, user: "", token: "" };
  } else if (action.type === "REDIRECT_TRUE") {
    return { ...state, redirect: true };
  } else if (action.type === "REDIRECT_FALSE") {
    return { ...state, redirect: false };
  } else if (action.type === "SET_MESSAGE") {
    return { ...state, message: action.payload };
  } else if (action.type === "REMOVE_MESSAGE") {
    return { ...state, message: "" };
  } else {
    return state;
  }
};

export default AuthReducer;

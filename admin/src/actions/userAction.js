import axios from "axios";
import instance from "../components/Config/axios";
import Cookies from "universal-cookie";
import {
  USER_SIGNIN_SUCCESS,
  COMPANY_LIST,
  EDIT_COMPANY,
  ADD_COMPANY,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_LIST,
  USER_LIST_FAIL,
  USER_EDIT,
  USER_CHANGE_PASSWORD,
  DASHBAORD_DATA,
  USER_APPROVAL,
  SURVEY_LIST,
  SURVEY_DETAIL,
  AUDIT_REPORT,
  AUDIT_IMAGES,
} from "../constents/constents";

const cookies = new Cookies();

export const signin = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/api/signIn", state, config);
      // localStorage.setItem('myToken', data.token);\
      cookies.set("token", data.token, { path: "/" });
      cookies.set("userData", data.userJson, { path: "/" });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.token });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// For Get for Edit user
export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const {
        data: { getUser, getFamilyInfo, getEmploymentInfo, getEducationInfo },
      } = await instance.get(`/api/userEdit/${userId}`);
      dispatch({
        type: USER_EDIT,
        payload: {
          getUser,
          getFamilyInfo,
          getEmploymentInfo,
          getEducationInfo,
        },
      });
    } catch (error) {
      dispatch({ type: USER_LIST_FAIL, payload: error.response.data.error });
    }
  };
};

// Here update the user Password
export const passwordSave = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/api/passwordChange", state, config);
      dispatch({ type: USER_CHANGE_PASSWORD, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

export const signout = () => (dispatch) => {
  //localStorage.removeItem('myToken');
  cookies.remove("token");
  cookies.remove("userData");
  dispatch({ type: USER_SIGNOUT });
};

// here to get Alla user
export const userlist = () => async (dispatch) => {
  try {
    const getUser = cookies.get("userData");

    const { data } = await axios.get(`/api/userList/${getUser._id}`);
    dispatch({ type: USER_LIST, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// here to get company
export const companylist = () => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/getAllCompany`);
    dispatch({ type: COMPANY_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// Here update the user Password
export const companySave = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/api/AddCompany", state, config);
      dispatch({ type: ADD_COMPANY, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// Here to Edit company
export const companyByID = (company_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/companyEdit/${company_id}`);
      dispatch({ type: EDIT_COMPANY, payload: data.companyEdit });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// Here to Get Datshboar Data
export const dashbaordData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/dashboard");
      dispatch({ type: DASHBAORD_DATA, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// Here Admin Approval
export const adminApproval = (user_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/adminApproval/${user_id}`);
      dispatch({ type: USER_APPROVAL, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// here to get Survey Report
export const surveylist = (user_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/surveyList/${user_id}`);
    dispatch({ type: SURVEY_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// here to get Survey Report
export const surveyDetail = (product_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/surveyDetails/${product_id}`);
    dispatch({ type: SURVEY_DETAIL, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// here to get Audit Report
export const auditReports = (user_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/auditReport/${user_id}`);
    dispatch({ type: AUDIT_REPORT, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// here to get Audit Report
export const auditImagesGet = (hf_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/auditImages/${hf_id}`);
    dispatch({ type: AUDIT_IMAGES, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

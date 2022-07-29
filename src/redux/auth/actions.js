import * as actionTypes from "./actionTypes";
import trackerApi from "../../services/trackerApi";

const registrationSuccess = () => {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
  };
};

const registrationFailure = (error) => {
  return {
    type: actionTypes.REGISTRATION_FAILURE,
    payload: error,
  };
};

const loginSuccess = (token) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: token,
  };
};

const loginFailure = (error) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: error,
  };
};

const reset = () => {
  return {
    type: actionTypes.RESET,
  };
};

const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

const load = () => {
  return {
    type: actionTypes.LOADING,
  };
};

const user = data =>{
    return {
        type:actionTypes.USER,
        payload:data,
    }
}

const registerUser = (data) => (dispatch) => {
  dispatch(load());
  trackerApi
    .post("/auth/register", data)
    .then((res) => {
      dispatch(load());
      console.log(res);
      dispatch(registrationSuccess());
    })
    .catch((error) => {
      dispatch(load());
      console.log(error);
      dispatch(registrationFailure(error.response.data));
    });
};

const loginUser = (data) => (dispatch) => {
  dispatch(load());
  trackerApi
    .post("/auth/login", data)
    .then((res) => {
      dispatch(load());
      console.log(res);
      dispatch(loginSuccess(res.data.access_token));
    })
    .catch((error) => {
      dispatch(load());
      console.log(error);
      dispatch(loginFailure(error.response.data));
    });
};

const getUser = (data) => (dispatch) => {
  trackerApi
    .get("/auth/user", { headers: { Authorization: `Bearer ${data}` } })
    .then((res) => {
      console.log(res);
      dispatch(user(res.data))
    });
};

export { reset, registerUser, loginUser, getUser };

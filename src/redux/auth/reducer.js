import {
  LOADING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  RESET,
  USER
} from "./actionTypes";

const initialState = {
  register: {
    isSuccess: false,
    error: null,
  },
  login: {
    isSuccess: localStorage.token ? true : false,
    error: null,
  },
  isLoading: false,
  isLoggedIn: localStorage.isLoggedIn ? true : false,
  user: "",
  token: localStorage.length ? localStorage.getItem("token") : "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        register: {
          isSuccess: true,
          error: null,
        },
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        register: {
          isSuccess: false,
          error: action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          isSuccess: true,
          error: null,
        },
        token: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isSuccess: false,
          error: action.payload,
        },
        token:"",
      };
    case RESET:
      return {
        ...state,
        register: {
          isSuccess: false,
          error: null,
        },
        login: {
          isSuccess: localStorage.token ? true : false,
          error: null,
        },
        isLoading: false,
        isLoggedIn: localStorage.isLoggedIn ? true : false,
        user: "",
        token: localStorage.length ? localStorage.getItem("token") : "",
        error: "",
      };
       case USER:
        return{
          ...state,
          user:action.payload
        }
      

      case LOADING:
        return {
          ...state,
          isLoading:!state.isLoading,
        }
    default:
      return state;
  }
};

export default reducer;

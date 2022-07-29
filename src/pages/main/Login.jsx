import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loginUser } from "../../redux/auth/actions";
import Loading from "./Loading";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [logUserDetails, setLogUserDetails] = useState({
    email: "",
    password: "",
  });
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const inputHandler = (e) => {
    setLogUserDetails({ ...logUserDetails, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    // if(storeState.authReducer.login.error)
    // {
    //     navigate('/errorMessage')
    // }
    if(storeState.authReducer.login.isSuccess)
    {
        localStorage.setItem("token",storeState.authReducer.token)
        localStorage.setItem("isLoggedIn",true)
        navigate('/userDetails')
    }
  })

  const logInHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(logUserDetails));
  };
  console.log(storeState);
  return (
    <div className="flex justify-center w-full">
      {storeState.authReducer.isLoading ? (
        <Loading />
      ) : (
        <form
          className="flex flex-col bg-slate-500 p-4 w-3/12"
          onSubmit={logInHandler}
        >
            <span className="text-red-600 absolute top-10 left-2/5">{storeState.authReducer.login.error}</span>
          <div className="flex flex-col my-1 gap-1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={logUserDetails.email}
              onChange={inputHandler}
              className="border-2 border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="flex flex-col my-1 gap-1">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={logUserDetails.password}
              onChange={inputHandler}
              className="border-2 border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="flex justify-center my-2">
            <button
              type="submit"
              className="flex bg-yellow-600 justify-center px-3 rounded-md text-black"
            >
              Log In
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;

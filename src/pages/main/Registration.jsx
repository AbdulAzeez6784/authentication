import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/actions";
import Loading from "./Loading";
import {useNavigate} from "react-router-dom"

const Registration = () => {
  const [regUserDetails, setRegUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const inputHandler = (e) => {
    setRegUserDetails({ ...regUserDetails, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    // if(storeState.authReducer.register.error)
    // {
    //     navigate('/errorMessage')
    // }
    if(storeState.authReducer.register.isSuccess)
    {
        navigate('/login')
    }
  },)
  const regHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(regUserDetails));
  };

  console.log(storeState);
  return (
    <div className="flex justify-center items-center w-full">
      {storeState.authReducer.isLoading ? (
        <Loading />
      ) : (
        <form
          className="flex flex-col bg-slate-500 p-4 w-3/12 rounded-lg"
          onSubmit={regHandler}
        >
            <span className="text-red-600 absolute top-10 left-2/5">{storeState.authReducer.register.error}</span>
          <div className="flex flex-col my-1 gap-y-1">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={regUserDetails.firstName}
              onChange={inputHandler}
              className="border-gray-300 text-black border-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col my-1 gap-y-1">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={regUserDetails.lastName}
              onChange={inputHandler}
              className="border-gray-300 text-black border-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col my-1 gap-y-1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={regUserDetails.email}
              onChange={inputHandler}
              className="border-gray-300 text-black border-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col my-1 gap-y-1">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={regUserDetails.password}
              onChange={inputHandler}
              className="border-gray-300 text-black border-2 rounded-md"
            />
          </div>
          <div className="my-2 text-center">
            <button
              type="submit"
              className="bg-yellow-600 text-black px-3 rounded-md py-1"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Registration;

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { reset } from "../redux/auth/actions";

const Header = () => {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-[5vh] justify-between items-center  text-white">
      <span className="mx-2">Header</span>
      <nav>
        {storeState.authReducer.isLoggedIn ? (
          <NavLink to="/login" onClick={() => {localStorage.clear();dispatch(reset())}} className="flex mx-3">
            Logout
          </NavLink>
        ) : (
          <span className="flex gap-2 mx-3">
            <NavLink to="/registration" onClick={() => dispatch(reset())}>
              Register
            </NavLink>
            <NavLink to="/login" onClick={() => dispatch(reset())}>
              Login
            </NavLink>
          </span>
        )}
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import Config from "./Config";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";

const Test = ({ children }) => {
  const storeState = useSelector((state) => state);
  if (children.isPrivate) {
    return storeState.authReducer.isLoggedIn ? (
      children.element
    ) : (
      <Navigate to="/login" />
    );
  }
  else return children.element;
};

const Routing = () => {
 
  return (
    <Routes>
      {Config.map((item) => {
        return (
          <Route
            key={item.key}
            path={item.path}
            element={<Test>{item}</Test>}
          />
        );
      })}
    </Routes>
  );
};

export default Routing;

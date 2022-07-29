import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUser } from "../../redux/auth/actions";

const UserDetails = () => {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(storeState);
  useEffect(() => {
    dispatch(getUser(storeState.authReducer.token));
  }, []);
  console.log(storeState.authReducer.user);
  return (
    <div className="flex flex-col text-black">
        {Object.entries(storeState.authReducer.user).map(([a, b],c) => 
          <li key={c}>{a} : {b}</li>
        )}
    </div>
  );
};

export default UserDetails;

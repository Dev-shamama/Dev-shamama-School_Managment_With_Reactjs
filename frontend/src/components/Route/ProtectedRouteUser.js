import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest}) => {
  // const { loading, user, isAuthenticated } = useSelector((state) => state.user);
  const d = useSelector((state) => state.user);
  console.log(d);
  return (
    <Fragment>
      {/* {loading === false &&
        (isAuthenticated === false ? <Navigate to="/auth" /> : <Outlet />)} */}
        <Outlet />
    </Fragment>
  );
};

export default ProtectedRoute;

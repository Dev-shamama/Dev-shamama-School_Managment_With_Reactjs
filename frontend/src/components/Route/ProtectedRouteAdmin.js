import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouteAdmin = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.admin);
  return (
    <Fragment>
        {loading === false &&
        (isAuthenticated === false ? <Navigate to="/admin/login" /> : <Outlet />)}
    </Fragment>
  );
};

export default ProtectedRouteAdmin;

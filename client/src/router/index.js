import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import defaultRoutes from "./routes";

const AppRouter = () => {
  const { isAuthenticated, loadUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated ? loadUser() : navigate("/");
  }, [isAuthenticated]);

  const { protectedRoutes, publicRoutes } = defaultRoutes;

  const publicPageRoutes = publicRoutes.map(({ label, path, component }) => {
    return <Route key={label} path={`/${path}`} element={component} />;
  });

  const protectedPageRoutes = protectedRoutes.map(
    ({ label, path, component }) => {
      return <Route key={label} path={`/${path}`} element={component} />;
    }
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {!isAuthenticated && <>{publicPageRoutes}</>}

        {/* protected routes */}
        <Route element={<RequireAuth />}>{protectedPageRoutes}</Route>

        {/* catch all */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;

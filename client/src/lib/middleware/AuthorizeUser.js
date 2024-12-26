import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/store";

const AuthorizeUser = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/errorpage"} replace={true} />;
  }

  return children;
};

export default AuthorizeUser;

const ProtectRoute = ({ children }) => {
  const username = useAuthStore.getState().auth.username;

  if (!username) {
    return <Navigate to={"/errorpage"} replace={true} />;
  }

  return children;
};

import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.AuthReducer);

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;

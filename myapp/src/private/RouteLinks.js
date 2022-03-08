import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
const RouteLinks = (props) => {
  const { user } = useSelector((state) => state.AuthReducer);
return user ?  < Navigate to="" />:<Route path={props.path} element={props.element} exact={props.exact} />
};

export default RouteLinks;

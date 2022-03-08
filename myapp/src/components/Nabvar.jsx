import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const logOutUser = () => {
    localStorage.removeItem("mytoken");
    dispatch({ type: "LOGOUT_USER" });
  };

  const Links = user ? (
    <li>
      <Link to="/">
        <span onClick={logOutUser}>Log Out</span>
      </Link>
    </li>
  ) : (
    <li>
      <Link to="/signUp">
        <span>Sign Up</span>
      </Link>
    </li>
  );
  return (
    <>
      <div className="top_bar_left clearfix">
        <div className="logo">
          <a
            id="logo"
            href="../../index-pay.html"
            title="BePay - BeTheme"
            data-height={60}
            data-padding={15}
          >
            <img
              className="logo-main scale-with-grid"
              src="assets/images/pay.png"
              data-retina="images/retina-pay.png"
              data-height={75}
              alt="pay"
            />
            <img
              className="logo-sticky scale-with-grid"
              src="assets/images/pay.png"
              data-retina="images/retina-pay.png"
              data-height={75}
              alt="pay"
            />
            <img
              className="logo-mobile scale-with-grid"
              src="assets/images/pay.png"
              data-retina="images/retina-pay.png"
              data-height={75}
              alt="pay"
            />
            <img
              className="logo-mobile-sticky scale-with-grid"
              src="assets/images/pay.png"
              data-retina="images/retina-pay.png"
              data-height={75}
              alt="pay"
            />
          </a>
        </div>
        <div className="menu_wrapper">
          <nav id="menu">
            <ul id="menu-main-menu" className="menu menu-main">
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/features">
                  <span>Features</span>
                </Link>
              </li>
              <li>
                <Link to="/pricingList">
                  <span>Pricing list</span>
                </Link>
              </li>
              <li className="current-menu-item">
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
              </li>
              {Links}
            </ul>
          </nav>
          <a className="responsive-menu-toggle" href="#">
            <i className="icon-menu-fine" />
          </a>
        </div>
      </div>
      <div className="top_bar_right">
        <div className="top_bar_right_wrapper">
          <a
            href="#"
            className="button button_theme button_js action_button"
            target="_blank"
          >
            <span className="button_label">GO TO MARKET</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

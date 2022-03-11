import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSave } from "../store/actions/userAction";
// import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Homefooter from "../components/Homefooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignAndLogin = (props) => {
  const [state, setState] = useState({
    user_fullname: "",
    user_country: "",
    user_currency: "",
    user_email: "",
    user_contact: "",
    username: "",
    user_password: "",
    user_type: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, registerErrors, user } = useSelector(
    (state) => state.AuthReducer
  );
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };

  const handleInputsImage = async (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.files,
    });
  };
  useEffect(() => {
    if (registerErrors.length > 0) {
      registerErrors.map((error) => toast.error(error.msg));
    }
    if (user) {
      navigate("/signIn");
    }
    console.log("main user", user);
  }, [registerErrors]);
  const userRegister = async (e) => {
    e.preventDefault();
    // const { user_fullname, user_country, user_contact, user_currency, user_email, user_password, username } = state
    // const res = await fetch("http://localhost:5000/api/signUp", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     user_fullname, user_country, user_contact, user_currency, user_email, user_password, username
    //   })
    // })
    // const data = res.json()
    // if (!data) {
    //   window.alert("invalid registration")
    //   console.log("invalid registration")

    // } else {
    //   window.alert("valid registration")
    //   console.log("valid registration")
    // }
    dispatch(userSave(state));
    console.log("data", state);

  };
  return (
    <>
      <div className="color-custom style-default button-default layout-full-width no-content-padding header-transparent minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-line-below-80 menuo-no-borders menuo-right mobile-tb-hide mobile-side-slide mobile-mini-mr-ll tr-content be-reg-2074">
        <div>
          <div id="Wrapper">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div id="Header_wrapper">
              <header id="Header">
                <div className="header_placeholder" />
                <div id="Top_bar">
                  <div className="container">
                    <div className="column one">
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
                                  <span>Services</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/pricingList">
                                  <span>Pricing list</span>
                                </Link>
                              </li>
                              {user ? (
                                <li>
                                  <Link to="/profile">
                                    <span>Profile</span>
                                  </Link>
                                </li>
                              ) : (
                                ""
                              )}

                              <li>
                                <Link to="/contact">
                                  <span>Contact</span>
                                </Link>
                              </li>
                              <li className="current-menu-item">
                                <Link to="/signUp">
                                  <span>Sign Up</span>
                                </Link>
                              </li>
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
                            href="http://bit.ly/1M6lijQ"
                            className="button button_theme button_js action_button"
                            target="_blank"
                          >
                            <span className="button_label">Buy now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div id="Content">
              <div className="content_wrapper clearfix">
                <div className="sections_group">
                  <div className="entry-content">
                    <div
                      className="section mcb-section"
                      style={{
                        paddingTop: "160px",
                        paddingBottom: "160px",
                        backgroundImage:
                          "url(assets/images/home_pay_pic11.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center bottom",
                      }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one valign-top clearfix">
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix align_center">
                                <h1>SIGN UP NOW !</h1>
                                <h5 className="themecolor">
                                  Fill The Form Below and
                                  <br /> Become the Part of Most Amazing Market
                                  Place
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section"
                      style={{ paddingTop: "60px", paddingBottom: "20px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one valign-top clearfix">
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix"
                                style={{ padding: "0 7% 0 0" }}
                              >
                                <h2>Do you have any question?</h2>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 10px" }}
                                />
                                <h5
                                  className="themecolor"
                                  style={{ marginBottom: "5px" }}
                                >
                                  Address workshop
                                </h5>
                                <h6>
                                  <i
                                    style={{ color: "#9a77ca" }}
                                    className="icon-map"
                                  />{" "}
                                  Level 13, 2 Elizabeth, Victoria 3000 Australia
                                </h6>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 10px" }}
                                />
                                <h5
                                  className="themecolor"
                                  style={{ marginBottom: "5px" }}
                                >
                                  Call us
                                </h5>
                                <h6>
                                  <i
                                    style={{ color: "#9a77ca" }}
                                    className="icon-phone"
                                  />{" "}
                                  +61 (0) 791 803 458
                                </h6>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 10px" }}
                                />
                                <h5
                                  className="themecolor"
                                  style={{ marginBottom: "5px" }}
                                >
                                  Write us
                                </h5>
                                <h6>
                                  <i
                                    style={{ color: "#9a77ca" }}
                                    className="icon-mail"
                                  />
                                  <a href="#">
                                    <span
                                      className="__cf_email__"
                                      data-cfemail="85ebeaf7e0f5e9fcc5e0ebf3e4f1eaabe6eae8"
                                    >
                                      mail@envato.com
                                    </span>
                                  </a>
                                </h6>
                              </div>
                            </div>
                            <div className="column mcb-column two-third column_column">
                              <div
                                className="column_attr clearfix"
                                style={{ padding: "0 7% 0 0" }}
                              >
                                <div id="contactWrapper">
                                  <form
                                    id="contactform"
                                    method="POST"
                                    onSubmit={userRegister}
                                  >
                                    {/* One Second (1/2) Column */}
                                    <div className="column one-second">
                                      <input
                                        placeholder="Your name"
                                        type="text"
                                        name="user_fullname"
                                        value={state.user_fullname}
                                        onChange={handleInputs}
                                        id="name"
                                        size={40}
                                        aria-required="true"
                                        aria-invalid="false"
                                      />
                                    </div>
                                    {/* One Second (1/2) Column */}
                                    <div className="column one-second">
                                      <input
                                        placeholder="Your e-mail"
                                        type="email"
                                        name="user_email"
                                        value={state.user_email}
                                        onChange={handleInputs}
                                        id="email"
                                        size={40}
                                        aria-required="true"
                                        aria-invalid="false"
                                      />
                                    </div>
                                    <div className="column one">
                                      <select
                                        name="user_country"
                                        value={state.user_country}
                                        id=""
                                        style={{ color: "white" }}
                                        onChange={handleInputs}

                                      >
                                        <option style={{ backgroundColor: "black" }} value="pakistan"> pakistan </option>
                                        <option style={{ backgroundColor: "black" }} value="america">america</option>
                                        <option style={{ backgroundColor: "black" }} value="canada">canada</option>
                                        <option style={{ backgroundColor: "black" }} value="england">england</option>
                                        <option style={{ backgroundColor: "black" }} value="nigeria">nigeria</option>
                                        <option style={{ backgroundColor: "black" }} value="mexico">mexico</option>
                                      </select>
                                    </div>
                                    <div className="column one">
                                      <select
                                        name="user_currency"
                                        value={state.user_currency}
                                        style={{ color: "white" }}
                                        id=""
                                        onChange={handleInputs}
                                      >
                                        <option style={{ backgroundColor: "black" }} value="ruppee">ruppee</option>
                                        <option style={{ backgroundColor: "black" }} value="dollar">dollar</option>
                                        <option style={{ backgroundColor: "black" }} value="pound">pound</option>
                                        <option style={{ backgroundColor: "black" }} value="euro">euro</option>
                                        <option style={{ backgroundColor: "black" }} value="naira">naira</option>
                                        <option style={{ backgroundColor: "black" }} value="mexican peso">mexican peso</option>


                                      </select>
                                    </div>
                                    <div className="column one">
                                      <input
                                        placeholder="Contact"
                                        type="text"
                                        name="user_contact"
                                        value={state.user_contact}
                                        onChange={handleInputs}
                                        id=""
                                        size={40}
                                        aria-invalid="false"
                                      />
                                    </div>
                                    <div className="column one">
                                      <input
                                        placeholder="Image"
                                        type="file"
                                        name="user_images"
                                        onChange={handleInputsImage}
                                        id=""
                                        size={40}
                                        aria-invalid="false"
                                      />
                                    </div>
                                    <div className="column one">
                                      <input
                                        placeholder="Username"
                                        type="text"
                                        name="username"
                                        onChange={handleInputs}
                                        value={state.username}
                                        id=""
                                        size={40}
                                        aria-invalid="false"
                                      />
                                    </div>
                                    <div className="column one">
                                      <input
                                        placeholder="Password"
                                        type="password"
                                        name="user_password"
                                        value={state.user_password}
                                        onChange={handleInputs}
                                        id=""
                                        size={40}
                                        aria-invalid="false"
                                      />
                                    </div>
                                    <div className="column one">
                                      <input
                                        type="submit"
                                        value={loading ? "..." : "Sign Up"}
                                        id="submit"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <ul>
                                <span>
                                  <Link to="/signIn">
                                    Already have an account
                                  </Link>
                                </span>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section"
                      style={{ paddingTop: "0px", paddingBottom: "20px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one valign-top clearfix">
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_clients_slider ">
                              <div className="clients_slider">
                                <div className="clients_slider_header">
                                  <h4 className="title">Clients</h4>
                                </div>
                                <ul className="clients clients_slider_ul">
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="assets/images/home_pay_client1-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="assets/images/home_pay_client2-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="assets/images/home_pay_client3-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="assets/images/home_pay_client4-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="assets/images/home_pay_client5-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="assets/images/home_pay_client6-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section"
                      style={{
                        paddingTop: "80px",
                        paddingBottom: "30px",
                        backgroundColor: "#0b0f2f",
                        backgroundImage:
                          "url(assets/images/home_pay_sectionbg3.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center bottom",
                      }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one valign-top clearfix">
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix align_center">
                                <h2>Follow us on social media</h2>
                                <h5 style={{ color: "#aeb0f3" }}>
                                  Vestibulum dapibus, mauris nec malesuada fames
                                  ac turpis velit
                                </h5>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 25px" }}
                                />
                                <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                  style={{
                                    backgroundColor: "#4351a5 !important",
                                    color: "#fff",
                                  }}
                                >
                                  <span className="button_icon">
                                    <i
                                      className="icon-facebook"
                                      style={{ color: "#fff !important" }}
                                    />
                                  </span>
                                  <span className="button_label">Facebook</span>
                                </a>
                                <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                  style={{
                                    backgroundColor: "#4dd1f1 !important",
                                    color: "#fff",
                                  }}
                                >
                                  <span className="button_icon">
                                    <i
                                      className="icon-twitter"
                                      style={{ color: "#fff !important" }}
                                    />
                                  </span>
                                  <span className="button_label">Twitter</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Homefooter />
          </div>
          {/* side menu */}
          <div id="Side_slide" className="right dark" data-width={250}>
            <div className="close-wrapper">
              <a href="#" className="close">
                <i className="icon-cancel-fine" />
              </a>
            </div>
            <div className="extras">
              <a
                href="http://bit.ly/1M6lijQ"
                className="button button_theme button_js action_button"
                target="_blank"
              >
                <span className="button_label">Buy now</span>
              </a>
              <div className="extras-wrapper" />
            </div>
            <div className="menu_wrapper" />
          </div>
          <div id="body_overlay" />
        </div>
      </div>
    </>
  );
};

export default SignAndLogin;

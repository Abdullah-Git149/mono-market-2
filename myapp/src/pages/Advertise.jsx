import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Homefooter from "../components/Homefooter";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createPostAction, redirect } from "../store/actions/postAction"


const Advertise = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.AuthReducer);
  const { createErrors, redirect } = useSelector((state) => state.PostReducer);
  const { _id, user_fullname } = user

  const [state, setState] = useState({
    amount: 0,
    post_currency: "",
    ratio: "",
    calcValue: 0
  })

  useEffect(() => {
    if (redirect) {
      navigate("/profile");
    }

    const { errors } = createErrors
    if (createErrors.length !== 0) {
      errors.map((errr) => toast.error(errr.msg))
    }
  }, [createErrors, redirect])

  const handleInputs = (e) => {
    if (state.post_currency === "naira") {
      state.ratio = "2.3"
      state.calcValue = Math.round(state.amount * 2.3)

    } else if (state.post_currency === "dollar") {
      state.ratio = "2"
      state.calcValue = Math.round(state.amount * 2)

    } else if (state.post_currency === "euro") {
      state.ratio = "2.5"
      state.calcValue = Math.round(state.amount * 2.5)
    } else if (state.post_currency === "pound") {
      state.ratio = "2.1"
      state.calcValue = Math.round(state.amount * 2.1)
    } else if (state.post_currency === "mexico pesa") {
      state.ratio = "2.4"
      state.calcValue = Math.round(state.amount * 2.4)
    } else if (state.post_currency === "ruppee") {
      state.ratio = "2.6"
      state.calcValue = Math.round(state.amount * 2.6)
    }

    setState({
      ...state,
      [e.target.name]: e.target.value
    })

    // if (state.post_currency === "naira") {
    //   setState({
    //     ...state,
    //     ratio: "2.3",
    //     calcValue: state.amount * 2.3,
    //     [e.target.name]: e.target.value,

    //   })

    // } else if (state.post_currency === "dollar") {
    //   setState({
    //     ...state,
    //     ratio: "2",
    //     calcValue: state.amount * 2,
    //     [e.target.name]: e.target.value,

    //   })
    // } else if (state.post_currency === "euro") {
    //   setState({
    //     ...state,
    //     ratio: "2.5",
    //     calcValue: state.amount * 2.5,
    //     [e.target.name]: e.target.value,

    //   })
    // } else if (state.post_currency === "pound") {
    //   setState({
    //     ...state,
    //     ratio: "2.1",
    //     calcValue: state.amount * 2.1,
    //     [e.target.name]: e.target.value,

    //   })
    // }

    console.log(state)
  }
  const createPost = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('amount', state.amount)
    formData.append('post_currency', state.post_currency)
    formData.append('ratio', state.ratio)
    formData.append('calcValue', state.calcValue)
    formData.append('user_fullname', user_fullname)
    formData.append('_id', _id)

    dispatch(createPostAction(formData))

    console.log("complete", state)
  }


  const logOutUser = () => {
    localStorage.removeItem("mytoken");
    dispatch({ type: "LOGOUT_USER" });
  };
  // const popluate = (s1, s2) => {
  //   // console.log(s1, s2)
  //   var v1 = document.getElementById(s1)
  //   var v2 = document.getElementById(s2)
  //   console.log(v1, v2)

  //   if (v1.value === "euro") {

  //   }
  // }
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
                          <a className="responsive-menu-toggle" href="">
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
                                <h1>Post an AD</h1>
                                <h5 className="themecolor">
                                  Suspendisse a pellentesque dui, non felis.
                                  Maecenas malesuada elit
                                  <br /> lectus felis, malesuada
                                  ultricies.Curabitur et ligula.
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section no-margin-h"
                      style={{ paddingTop: "0px", paddingBottom: "50px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div
                          className="wrap mcb-wrap one valign-top clearfix"
                          style={{ marginTop: "-160px" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "40%",
                              }}
                            >
                              {/* <h4>Profile Image</h4>
                            
                             <img src={user.user_images} alt="" /> */}

                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "40%",
                              }}
                            >
                              <h4>Name</h4>
                              <span>
                                <b> {user.user_fullname}</b>
                              </span>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "40%",
                              }}
                            >
                              <h4>Country</h4>
                              <span>
                                <b> {user.user_country}</b>
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "40%",
                              }}
                            >
                              <h4>Currency</h4>
                              <span>
                                <b> {user.user_currency}</b>
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "40%",
                              }}
                            >
                              <h4>Email</h4>
                              <span>
                                <b> {user.user_email}</b>
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "40%",
                              }}
                            >
                              <h4>Contact</h4>
                              <span>
                                <b> {user.user_contact}</b>
                              </span>
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
                            <div className="column mcb-column one-second column_column">
                              <div id="contactWrapper">
                                <form
                                  onSubmit={createPost}
                                  id="contactform"
                                  method="POST"
                                >
                                  <div className="column one">
                                    <label htmlFor="amount">Select An Amount</label>
                                    <input
                                      id="amount"
                                      placeholder="Amount"
                                      type="number"
                                      name="amount"
                                      value={state.amount}
                                      onChange={handleInputs}

                                      size={40}
                                      aria-invalid="false"
                                    />
                                  </div>
                                  <div className="column one">
                                    <select
                                      name="post_currency"
                                      style={{ color: "white" }}
                                      value={state.post_currency}
                                      onChange={handleInputs}
                                      id="sclt1"
                                    >
                                      {/* {
                                        state.post_currency.map((data) => {
                                          <option value={data.name} selected={data.name}>{data.name}</option>
                                        })
                                      } */}

                                      <option style={{ backgroundColor: "black" }} value="" disabled>-- Select Currency --</option>
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
                                      id=""
                                      placeholder="Ratio"
                                      type="text"
                                      name="ratio"
                                      value={state.ratio}
                                      disabled
                                      onChange={handleInputs}
                                      size={40}
                                      aria-invalid="false"
                                    />
                                  </div>

                                  <div className="column one">
                                    <input
                                      id=""
                                      placeholder="Calculatee Amount"
                                      type="text"
                                      disabled
                                      name="calcValue"
                                      value={state.calcValue}
                                      onChange={handleInputs}
                                      size={40}
                                      aria-invalid="false"
                                    />
                                  </div>
                                  {/* One Second (1/2) Column */}

                                  <div className="column one">
                                    <input
                                      type="submit"
                                      defaultValue="Create Post"
                                      id="submit"
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="column mcb-column one-second column_column">
                              <div
                                className="column_attr clearfix disspear"
                                style={{ padding: "0 7% 0 0" }}
                              >
                                <h2>
                                  Do you need more options from{" "}
                                  <span className="themecolor">Be Pay?</span>{" "}
                                  Contact us
                                </h2>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 10px" }}
                                />
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Et leo duis ut diam quam nulla porttitor. Eget
                                  nunc scelerisque viverra mauris in.
                                </p>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 10px" }}
                                />
                                <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                >
                                  <span className="button_icon">
                                    <i className="icon-right-circled" />
                                  </span>
                                  <span className="button_label">
                                    Contact us
                                  </span>
                                </a>
                              </div>
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
                            <div className="column mcb-column one column_clients_slider disspear">
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

export default Advertise;

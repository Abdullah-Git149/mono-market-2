import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Homefooter from "../components/Homefooter";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { fetchPosts } from "../store/actions/postAction"
import { FaEdit, FaTrash } from "react-icons/fa";
const Profile = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const { redirect, message, loading } = useSelector((state) => state.PostReducer);
  const { posts } = useSelector((state) => state.FetchPosts)
  const dispatch = useDispatch();
  const { _id } = user

  useEffect(() => {
    if (redirect) {
      dispatch({ type: "REDIRECT_FALSE" })

    }
    if (message) {
      toast.success(message)
      dispatch({ type: "REMOVE_MESSAGE" })
    }
    dispatch(fetchPosts(_id))
  }, [])
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
                                <h1>Profile</h1>
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
                              <Link to="/advertise">Create an AD</Link>
                            </div>
                            <div className="column mcb-column one-second column_column">
                              <div
                                className="column_attr clearfix"
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

                    {/* Post  */}


                    <div
                      className="section mcb-section"
                      style={{ paddingTop: "0px", paddingBottom: "20px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one valign-top clearfix">
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one-second column_column">
                              {/* // area  */}

                              <div className="posts">
                                {posts.length > 0 ? posts.map((post) => (
                                  <>
                                    <Link to="/">  <div className="posts_child" key={post._id} >


                                      <h1>Ad </h1>
                                      <h6><span>Name:</span> {post.user_fullname}</h6>
                                      <span>Total Amout: ${post.amount}</span>
                                      <span> Currency:  {post.post_currency}</span>
                                      <span>Ratio: {post.ratio}</span>
                                      <span>Calculated Value: ${post.calcValue}</span>
                                      <div>
                                        <FaEdit className="myicons" />
                                        <FaTrash className="myicons" />
                                      </div>


                                    </div></Link>
                                  </>
                                )

                                ) : " You dont have any post"}

                              </div>
                            </div>
                            <div className="column mcb-column one-second column_column">
                              {/* secnd  */}
                            </div>



                          </div>
                        </div>
                      </div>
                    </div>
                    {/* {posts.length > 0 ? posts.map((post) => {
                      <>
                        <div
                          className="section mcb-section"
                          style={{ paddingTop: "0px", paddingBottom: "40px" }}
                        >
                          <div className="section_wrapper mcb-section-inner">
                            <div className="wrap mcb-wrap one valign-top clearfix">
                              <div className="mcb-wrap-inner">
                                <div className="column mcb-column one-third column_column">
                                  <div
                                    className="column_attr clearfix"
                                    style={{
                                      backgroundImage:
                                        'url("assets/images/home_pay_features2.png")',
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "left top",
                                      padding: "5px 0 0 60px",
                                    }}
                                  >
                                    <h5>{post.user_fullname}</h5>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adi
                                      piscing elit, sed do eiusmod tempor inci
                                      didunt ut labore et dolore magna aliqua. Et
                                      leo duis ut diam quam nulla porttitor.
                                    </p>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    })
                      : " You dont have any post"} */}

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

export default Profile;

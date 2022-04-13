import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Homefooter from "../components/Homefooter";
import AOS from "aos"

const PriceListing = () => {
  AOS.init({
    offset: 320,
    duration: 800,
  });
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
      <div className="color-custom style-default button-default layout-full-width no-content-padding header-transparent minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-line-below-80 menuo-no-borders menuo-right mobile-tb-hide mobile-side-slide mobile-mini-mr-ll tr-content be-reg-2074">
        <div>
          <div id="Wrapper">
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
                              src="/assets/images/pay.png"
                              data-retina="images/retina-pay.png"
                              data-height={75}
                              alt="pay"
                            />
                            <img
                              className="logo-sticky scale-with-grid"
                              src="/assets/images/pay.png"
                              data-retina="images/retina-pay.png"
                              data-height={75}
                              alt="pay"
                            />
                            <img
                              className="logo-mobile scale-with-grid"
                              src="/assets/images/pay.png"
                              data-retina="images/retina-pay.png"
                              data-height={75}
                              alt="pay"
                            />
                            <img
                              className="logo-mobile-sticky scale-with-grid"
                              src="/assets/images/pay.png"
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
                              <li className="current-menu-item">
                                <Link to="/pricingList" className="disspear">
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
                        backgroundImage: "url(/assets/images/home_pay_pic11.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center bottom",
                      }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one valign-top clearfix">
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix align_center">
                                <h1>Pricing list</h1>
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
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix align_center"
                                style={{
                                  backgroundColor: "#121038",
                                  padding: "50px 50px 35px",
                                  borderRadius: "30px",
                                  marginTop: "30px",
                                }}
                              >
                                <h4>Basic</h4>
                                <div
                                  className="google_font"
                                  style={{
                                    fontFamily:
                                      '"Quicksand",Arial,Tahoma,sans-serif',
                                    fontSize: "48px",
                                    lineHeight: "48px",
                                    fontWeight: 400,
                                    color: "#67fed1",
                                  }}
                                >
                                  $19.99
                                </div>
                                <h6>per month</h6>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 25px" }}
                                />
                                <div
                                  style={{
                                    height: "1px",
                                    width: "80%",
                                    margin: "0 auto",
                                    marginBottom: "40px",
                                    background: "#1e1c42",
                                  }}
                                />
                                <p>
                                  <span
                                    style={{ color: "#fff", fontWeight: 700 }}
                                  >
                                    10
                                  </span>{" "}
                                  lorem ipsum dolor
                                </p>
                                <p>
                                  <span
                                    style={{ color: "#fff", fontWeight: 700 }}
                                  >
                                    1
                                  </span>{" "}
                                  Suspendisse a pellentesque dui
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Maecenas malesuada elit lectus felis
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Malesuada ultricies
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Nulla imperdiet sit amet magna
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Vestibulum dapibus, mauris nec
                                </p>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 15px" }}
                                />
                                <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                >
                                  <span className="button_icon">
                                    <i className="icon-cart" />
                                  </span>
                                  <span className="button_label">Sign up</span>
                                </a>
                              </div>
                            </div>
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix align_center"
                                style={{
                                  backgroundColor: "#121038",
                                  backgroundImage:
                                    'url("assets/images/home_pay_columnbg1.png")',
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                  padding: "50px 50px 35px",
                                  borderRadius: "30px",
                                }}
                              >
                                <h3>Standard</h3>
                                <h5 style={{ color: "#aeb0f3" }}>
                                  Most popular
                                </h5>
                                <div
                                  className="google_font"
                                  style={{
                                    fontFamily:
                                      '"Quicksand",Arial,Tahoma,sans-serif',
                                    fontSize: "72px",
                                    lineHeight: "72px",
                                    fontWeight: 400,
                                    color: "#67fed1",
                                  }}
                                >
                                  $49.99
                                </div>
                                <h6>per month</h6>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 25px" }}
                                />
                                <div
                                  style={{
                                    height: "1px",
                                    width: "80%",
                                    margin: "0 auto",
                                    marginBottom: "40px",
                                    background: "#1e1c42",
                                  }}
                                />
                                <p>
                                  <span
                                    style={{ color: "#fff", fontWeight: 700 }}
                                  >
                                    100
                                  </span>{" "}
                                  lorem ipsum dolor
                                </p>
                                <p>
                                  <span
                                    style={{ color: "#fff", fontWeight: 700 }}
                                  >
                                    10
                                  </span>{" "}
                                  Suspendisse a pellentesque dui
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Maecenas malesuada elit lectus felis
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Malesuada ultricies
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Nulla imperdiet sit amet magna
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Vestibulum dapibus, mauris nec
                                </p>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 15px" }}
                                />
                                <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                  style={{
                                    backgroundColor: "#5c56d4 !important",
                                    color: "#fff",
                                  }}
                                >
                                  <span className="button_icon">
                                    <i
                                      className="icon-cart"
                                      style={{ color: "#fff !important" }}
                                    />
                                  </span>
                                  <span className="button_label">Sign up</span>
                                </a>
                              </div>
                            </div>
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix align_center"
                                style={{
                                  backgroundColor: "#121038",
                                  padding: "50px 50px 35px",
                                  borderRadius: "30px",
                                  marginTop: "30px",
                                }}
                              >
                                <h4>Professional</h4>
                                <div
                                  className="google_font"
                                  style={{
                                    fontFamily:
                                      '"Quicksand",Arial,Tahoma,sans-serif',
                                    fontSize: "48px",
                                    lineHeight: "48px",
                                    fontWeight: 400,
                                    color: "#67fed1",
                                  }}
                                >
                                  $99.99
                                </div>
                                <h6>per month</h6>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 25px" }}
                                />
                                <div
                                  style={{
                                    height: "1px",
                                    width: "80%",
                                    margin: "0 auto",
                                    marginBottom: "40px",
                                    background: "#1e1c42",
                                  }}
                                />
                                <p>
                                  <span
                                    style={{ color: "#fff", fontWeight: 700 }}
                                  >
                                    Unlimited
                                  </span>{" "}
                                  lorem ipsum dolor
                                </p>
                                <p>
                                  <span
                                    style={{ color: "#fff", fontWeight: 700 }}
                                  >
                                    Unlimited
                                  </span>{" "}
                                  Suspendisse a pellentesque dui
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/assets/images/home_pay_pricing1.png"
                                  />{" "}
                                  Maecenas malesuada elit lectus felis
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/images/home_pay_pricing1.png"
                                  />{" "}
                                  Malesuada ultricies
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/images/home_pay_pricing1.png"
                                  />{" "}
                                  Nulla imperdiet sit amet magna
                                </p>
                                <p>
                                  <img
                                    style={{
                                      display: "inline-block",
                                      marginRight: "10px",
                                      positive: "relativel top: 4px",
                                    }}
                                    src="/images/home_pay_pricing1.png"
                                  />{" "}
                                  Vestibulum dapibus, mauris nec
                                </p>
                                <hr
                                  className="no_line"
                                  style={{ margin: "0 auto 15px" }}
                                />
                                <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                >
                                  <span className="button_icon">
                                    <i className="icon-cart" />
                                  </span>
                                  <span className="button_label">Sign up</span>
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
                            <div className="column mcb-column one-second column_column" data-aos="zoom-in-right">
                              <div
                                className="column_attr clearfix"
                                style={{ padding: "0 7% 0 0" }}
                              >
                                <h2>
                                  Learn a few reasons why{" "}
                                  <span className="themecolor">Be Pay</span>{" "}
                                  might be the right fit
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
                                    Learn more
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="column mcb-column one-second column_column" data-aos="zoom-in-left">
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
                                        src="/assets/images/home_pay_client1-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="/assets/images/home_pay_client2-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="/assets/images/home_pay_client3-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="/assets/images/home_pay_client4-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="/assets/images/home_pay_client5-145x75.png"
                                        className="scale-with-grid wp-post-image"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div className="client_wrapper">
                                      <img
                                        src="/assets/images/home_pay_client6-145x75.png"
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
                        backgroundImage: "url(/assets/images/home_pay_sectionbg3.png)",
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
            <Homefooter/>
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

export default PriceListing;

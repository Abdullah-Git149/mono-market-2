import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Homefooter from "../components/Homefooter";
const Contact = () => {
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
                              <li className="current-menu-item">
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
                                <h1>Contact us</h1>
                                <h5 className="themecolor">
                                  The company was formed in 2021 under our
                                  parent company Six-k Company LLC.
                                  <br />
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
                            <div className="column mcb-column one-third column_column disspear">
                              <div
                                className="column_attr clearfix"
                                style={{ padding: "0 7% 0 0" }}
                              >
                                <h2>Do you have any questions?</h2>
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
                                  651 N. Broad St., Suite 206 Middletown DE
                                  19709 USA
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
                                  123456789
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
                                      talk2us@monymarkets.com
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
                                  <form id="contactform">
                                    {/* One Second (1/2) Column */}
                                    <div className="column one-second">
                                      <input
                                        placeholder="Your name"
                                        type="text"
                                        name="name"
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
                                        name="email"
                                        id="email"
                                        size={40}
                                        aria-required="true"
                                        aria-invalid="false"
                                      />
                                    </div>
                                    <div className="column one">
                                      <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        size={40}
                                        aria-invalid="false"
                                      />
                                    </div>
                                    <div className="column one">
                                      <textarea
                                        placeholder="Message"
                                        name="body"
                                        id="body"
                                        style={{ width: "100%" }}
                                        rows={10}
                                        aria-invalid="false"
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="column one">
                                      <input
                                        type="button"
                                        defaultValue="Send A Message"
                                        id="submit"
                                        onclick="return check_values();"
                                      />
                                    </div>
                                  </form>
                                </div>
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
                            <div className="column mcb-column one column_clients_slider disspear ">
                              <div className="clients_slider ">
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

export default Contact;

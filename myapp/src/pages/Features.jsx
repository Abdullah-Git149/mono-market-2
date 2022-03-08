import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Homefooter from "../components/Homefooter";

const Features = () => {
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
                              <li className="current-menu-item">
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
                                <h1>Features</h1>
                                <h5 className="themecolor">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nulla mauris dolor,
                                  <br /> gravida a varius blandit, auctor eget
                                  purus.
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section no-margin-h"
                      style={{ paddingTop: "0px", paddingBottom: "0px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div
                          className="wrap mcb-wrap one valign-top clearfix"
                          style={{ marginTop: "-160px" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_image ">
                              <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_features1.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                <h5>Accounts balace</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adi
                                  piscing elit, sed do eiusmod tempor inci
                                  didunt ut labore et dolore magna aliqua. Et
                                  leo duis ut diam quam nulla porttitor.
                                </p>
                              </div>
                            </div>
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix"
                                style={{
                                  backgroundImage:
                                    'url("assets/images/home_pay_features3.png")',
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "left top",
                                  padding: "5px 0 0 60px",
                                }}
                              >
                                <h5>Balance account statistics</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adi
                                  piscing elit, sed do eiusmod tempor inci
                                  didunt ut labore et dolore magna aliqua. Et
                                  leo duis ut diam quam nulla porttitor.
                                </p>
                              </div>
                            </div>
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix"
                                style={{
                                  backgroundImage:
                                    'url("assets/images/home_pay_features4.png")',
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "left top",
                                  padding: "5px 0 0 60px",
                                }}
                              >
                                <h5>Activities</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adi
                                  piscing elit, sed do eiusmod tempor inci
                                  didunt ut labore et dolore magna aliqua. Et
                                  leo duis ut diam quam nulla porttitor.
                                </p>
                              </div>
                            </div>
                            <div className="column mcb-column one column_divider ">
                              <hr className="no_line" />
                            </div>
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix"
                                style={{
                                  backgroundImage:
                                    'url("assets/images/home_pay_features5.png")',
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "left top",
                                  padding: "5px 0 0 60px",
                                }}
                              >
                                <h5>Advanced seach</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adi
                                  piscing elit, sed do eiusmod tempor inci
                                  didunt ut labore et dolore magna aliqua. Et
                                  leo duis ut diam quam nulla porttitor.
                                </p>
                              </div>
                            </div>
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix"
                                style={{
                                  backgroundImage:
                                    'url("assets/images/home_pay_features6.png")',
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "left top",
                                  padding: "5px 0 0 60px",
                                }}
                              >
                                <h5>Expenditure statistics</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adi
                                  piscing elit, sed do eiusmod tempor inci
                                  didunt ut labore et dolore magna aliqua. Et
                                  leo duis ut diam quam nulla porttitor.
                                </p>
                              </div>
                            </div>
                            <div className="column mcb-column one-third column_column">
                              <div
                                className="column_attr clearfix"
                                style={{
                                  backgroundImage:
                                    'url("assets/images/home_pay_features7.png")',
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "left top",
                                  padding: "5px 0 0 60px",
                                }}
                              >
                                <h5>Cards settings</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adi
                                  piscing elit, sed do eiusmod tempor inci
                                  didunt ut labore et dolore magna aliqua. Et
                                  leo duis ut diam quam nulla porttitor.
                                </p>
                              </div>
                            </div>
                            <div className="column mcb-column one column_button">
                              <div className="button_align align_center">
                                <a
                                  className="button  button_left button_size_2 button_js"
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
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix align_center">
                                <h1>Use Case</h1>
                                <h5 className="themecolor">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nulla mauris dolor, gravida a
                                  varius
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section equal-height-wrap"
                      style={{ paddingTop: "0px", paddingBottom: "80px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div
                          className="wrap mcb-wrap one-second  valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_image ">
                              <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_features8.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="wrap mcb-wrap one-second valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix">
                                <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                  <div className="image_wrapper">
                                    <img
                                      className="scale-with-grid"
                                      src="assets/images/home_pay_features13.png"
                                    />
                                  </div>
                                </div>

                                <p>
                                  1. Mr Adam is small business owner that lives
                                  in Nigeria has N500,000 and intend to pay his
                                  son $1000 tuition in the United states of
                                  America. Due to covid Mr Adam has been facing
                                  challenges on the stress imposed by covid on
                                  the money exchanges rates and even
                                  availability of foreign funds to purchase with
                                  a Nigerian Naira
                                </p>
                                {/* <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                >
                                  <span className="button_icon">
                                    <i className="icon-right-circled" />
                                  </span>
                                  <span className="button_label">
                                    Learn more
                                  </span>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section equal-height-wrap"
                      style={{ paddingTop: "0px", paddingBottom: "80px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div
                          className="wrap mcb-wrap one-second  valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix">
                                <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                  <div className="image_wrapper">
                                    <img
                                      className="scale-with-grid"
                                      src="assets/images/home_pay_features14.png"
                                    />
                                  </div>
                                </div>

                                <p>
                                  2. Mr smith lives in New York he sends $300
                                  usd to Nigeria to his mum every month, but the
                                  exchange rates have not been good, so his mum
                                  have been receiving less for the huge amount
                                  of dollars he sends. Mr smith is looking for a
                                  better option
                                </p>
                                {/* <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                >
                                  <span className="button_icon">
                                    <i className="icon-right-circled" />
                                  </span>
                                  <span className="button_label">
                                    Learn more
                                  </span>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="wrap mcb-wrap one-second valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_image ">
                              <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_features9.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section equal-height-wrap"
                      style={{ paddingTop: "0px", paddingBottom: "80px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div
                          className="wrap mcb-wrap one-second  valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_image ">
                              <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_features10.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="wrap mcb-wrap one-second valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix">
                                <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                  <div className="image_wrapper">
                                    <img
                                      className="scale-with-grid"
                                      src="assets/images/home_pay_features15.png"
                                    />
                                  </div>
                                </div>

                                <p>
                                  3. Stella lives in UK but does business in
                                  Nigeria by selling imported merchandise. She
                                  travels constantly to Nigeria for business,
                                  especially to sell her merchandise and get her
                                  payment. She has been making huge sales in the
                                  past two years. But her profit has been very
                                  little from the huge revenue. She is finding
                                  ways to get a better rate to convert the naira
                                  payments she receives in Nigeria to $ where
                                  she buys her merchandise.
                                </p>
                                {/* <a
                                  className="button  button_right button_size_2 button_js"
                                  href="#"
                                >
                                  <span className="button_icon">
                                    <i className="icon-right-circled" />
                                  </span>
                                  <span className="button_label">
                                    Learn more
                                  </span>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section mcb-section equal-height-wrap"
                      style={{ paddingTop: "0px", paddingBottom: "80px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div
                          className="wrap mcb-wrap one-second  valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          {/* <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix">
                                <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                  <div className="image_wrapper">
                                    <img
                                      className="scale-with-grid"
                                      src="assets/images/home_pay_features16.png"
                                    />
                                  </div>
                                </div>
                                <h2>Advanced search</h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Et leo duis ut diam quam nulla porttitor.
                                  Quisque lorem tortor fringilla sed, vestibulum
                                  id, eleifend justo vel bibendum sapien massa
                                  ac turpis faucibus orci luctus non,
                                  consectetuer lobortis quis, varius in, purus.
                                </p>
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
                          </div> */}
                        </div>
                        {/* <div
                          className="wrap mcb-wrap one-second valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_image ">
                              <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_features11.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* <div
                      className="section mcb-section equal-height-wrap"
                      style={{ paddingTop: "0px", paddingBottom: "40px" }}
                    >
                      <div className="section_wrapper mcb-section-inner">
                        <div
                          className="wrap mcb-wrap one-second  valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_image">
                              <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_features12.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="wrap mcb-wrap one-second  valign-middle clearfix"
                          style={{ padding: "0 2%" }}
                        >
                          <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                              <div className="column_attr clearfix">
                                <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                  <div className="image_wrapper">
                                    <img
                                      className="scale-with-grid"
                                      src="assets/images/home_pay_features17.png"
                                    />
                                  </div>
                                </div>
                                <h2>Accounts Balance</h2>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Et leo duis ut diam quam nulla porttitor.
                                  Quisque lorem tortor fringilla sed, vestibulum
                                  id, eleifend justo vel bibendum sapien massa
                                  ac turpis faucibus orci luctus non,
                                  consectetuer lobortis quis, varius in, purus.
                                </p>
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
                          </div>
                        </div>
                      </div>
                    </div> */}
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

export default Features;

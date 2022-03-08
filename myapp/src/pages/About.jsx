import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Homefooter from "../components/Homefooter";
const About = () => {

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
                            data-retina="assets/images/retina-pay.png"
                            data-height={75}
                            alt="pay"
                          />
                          <img
                            className="logo-sticky scale-with-grid"
                            src="assets/images/pay.png"
                            data-retina="assets/images/retina-pay.png"
                            data-height={75}
                            alt="pay"
                          />
                          <img
                            className="logo-mobile scale-with-grid"
                            src="assets/images/pay.png"
                            data-retina="assets/images/retina-pay.png"
                            data-height={75}
                            alt="pay"
                          />
                          <img
                            className="logo-mobile-sticky scale-with-grid"
                            src="assets/images/pay.png"
                            data-retina="assets/images/retina-pay.png"
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
                            <li className="current-menu-item">
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
                      backgroundImage: "url(assets/images/home_pay_pic11.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center bottom",
                    }}
                  >
                    <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_column">
                            <div className="column_attr clearfix align_center">
                              <h1>About the firm</h1>
                              <h5 className="themecolor">
                                The company was formed in 2021 under our parent
                                company Six-k Company LLC.
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="section mcb-section"
                    style={{ paddingTop: "60px", paddingBottom: "60px" }}
                  >
                    <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one-third valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_column  column-margin-20px">
                            <div className="column_attr clearfix">
                              <h2>
                                Meet our
                                <span className="themecolor"> team</span>
                              </h2>
                              <hr
                                className="no_line"
                                style={{ margin: "0 auto 10px" }}
                              />
                              <p>
                                We are a peer-to-peer money transfer/exchange
                                platform. Our vision is to help people simplify
                                the hurdles of transfer, and transacting
                                currencies within the money exchange space.
                                Leveraging on technology, we aim to exterminate
                                the need to switch money through the traditional
                                currency brokers. Customer now could determine
                                what currency is more valuable to them.
                              </p>
                              <hr
                                className="no_line"
                                style={{ margin: "0 auto 10px" }}
                              />
                            </div>
                          </div>
                          <div className="column mcb-column one column_button">
                            <a
                              className="button  button_left button_size_2 button_js"
                              href="contact.html"
                            >
                              <span className="button_icon">
                                <i className="icon-right-circled" />
                              </span>
                              <span className="button_label">Contact us</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="wrap mcb-wrap two-third valign-top clearfix"
                        style={{ padding: "0 0 0 5%" }}
                      >
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one-third column_our_team ">
                            <div className="team team_circle">
                              <div className="image_frame photo no_link scale-with-grid">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_about1.jpg"
                                  />
                                </div>
                              </div>
                              <div className="desc_wrapper">
                                <h4>Jennifer Lee</h4>
                                <p className="subtitle">Organizer</p>
                                <hr className="hr_color" />
                                <div className="desc">
                                  Ut ultricies imperdiet sodales. Aliquam
                                  fringilla aliquam ex sit amet elementum.
                                </div>
                                <div className="links">
                                  <a
                                    href="http://themes.muffingroup.com/cdn-cgi/l/email-protection#0724"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-mail" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-mail" />
                                    </span>
                                  </a>
                                  <a
                                    target="_blank"
                                    href="#"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-facebook" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-facebook" />
                                    </span>
                                  </a>
                                  <a
                                    target="_blank"
                                    href="#"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-twitter" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-twitter" />
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_our_team ">
                            <div className="team team_circle">
                              <div className="image_frame photo no_link scale-with-grid">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_about2.jpg"
                                  />
                                </div>
                              </div>
                              <div className="desc_wrapper">
                                <h4>Kevin Perry</h4>
                                <p className="subtitle">Lorem ipsum</p>
                                <hr className="hr_color" />
                                <div className="desc">
                                  Ut ultricies imperdiet sodales. Aliquam
                                  fringilla aliquam ex sit amet elementum.
                                </div>
                                <div className="links">
                                  <a
                                    href="http://themes.muffingroup.com/cdn-cgi/l/email-protection#082b"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-mail" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-mail" />
                                    </span>
                                  </a>
                                  <a
                                    target="_blank"
                                    href="#"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-facebook" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-facebook" />
                                    </span>
                                  </a>
                                  <a
                                    target="_blank"
                                    href="#"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-twitter" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-twitter" />
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_our_team ">
                            <div className="team team_circle">
                              <div className="image_frame photo no_link scale-with-grid">
                                <div className="image_wrapper">
                                  <img
                                    className="scale-with-grid"
                                    src="assets/images/home_pay_about3.jpg"
                                  />
                                </div>
                              </div>
                              <div className="desc_wrapper">
                                <h4>Brandon Ross</h4>
                                <p className="subtitle">Vitae</p>
                                <hr className="hr_color" />
                                <div className="desc">
                                  Ut ultricies imperdiet sodales. Aliquam
                                  fringilla aliquam ex sit amet elementum.
                                </div>
                                <div className="links">
                                  <a
                                    href="http://themes.muffingroup.com/cdn-cgi/l/email-protection#8dae"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-mail" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-mail" />
                                    </span>
                                  </a>
                                  <a
                                    target="_blank"
                                    href="#"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-facebook" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-facebook" />
                                    </span>
                                  </a>
                                  <a
                                    target="_blank"
                                    href="#"
                                    className="icon_bar icon_bar_small"
                                  >
                                    <span className="t">
                                      <i className="icon-twitter" />
                                    </span>
                                    <span className="b">
                                      <i className="icon-twitter" />
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wrap mcb-wrap one valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_divider ">
                            <hr
                              className="no_line"
                              style={{ margin: "0 auto 40px" }}
                            />
                          </div>
                          {/* <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{ padding: "0 5% 0 0" }}
                            >
                              <h2>
                                Aliquet sagittis id sit amet est placerat in
                                egestas
                              </h2>
                              <hr
                                className="no_line"
                                style={{ margin: "0 auto 10px" }}
                              />
                              <p>
                                Aliquam ac dui vel dui vulputate consectetur.
                                Mauris accumsan, massa non consectetur
                                condimentum, diam arcu tristique nibh, nec
                                egestas diam elit at nulla. Suspendisse potenti.
                                In non lacinia risus, ac tempor ipsum.
                              </p>
                              <p>
                                Phasellus venenatis leo eu semper varius.
                                Maecenas sit amet molestie leo. Morbi vitae urna
                                mauris. Nulla nec tortor vitae eros iaculis
                                hendrerit aliquet non urna. Nulla sit amet
                                vestibulum magna, eget pulvinar libero.
                              </p>
                            </div>
                          </div> */}
                          {/* <div className="column mcb-column two-third column_image ">
                            <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                              <div className="image_wrapper">
                                <img
                                  className="scale-with-grid"
                                  src="assets/images/home_pay_about4.png"
                                />
                              </div>
                            </div>
                          </div> */}
                          <div className="column mcb-column one column_divider ">
                            <hr
                              className="no_line"
                              style={{ margin: "0 auto 10px" }}
                            />
                          </div>
                          <div className="column mcb-column one column_column">
                            <div className="column_attr clearfix align_center">
                              <h2>How it Works</h2>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundColor: "#121039",
                                padding: "25px 30px 10px",
                                borderRadius: "15px",
                                height: "350px",
                              }}
                            >
                              <img
                                className="scale-with-grid"
                                src="assets/images/pic1.png"
                              />
                              <h5>
                                Mr Adam logs onto MM and posts his Naira
                                N500,000 up for sale against dollars, he state
                                is exchange rate
                              </h5>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundColor: "#121039",
                                padding: "25px 30px 10px",
                                borderRadius: "15px",
                                height: "350px",
                              }}
                            >
                              <img
                                className="scale-with-grid"
                                src="assets/images/pic2.png"
                              />
                              <h5>
                                Mr smith logs on to MM and posts his 300dollars
                                looking to buy Naira
                              </h5>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundColor: "#121039",
                                padding: "25px 30px 10px",
                                borderRadius: "15px",
                                height: "350px",
                              }}
                            >
                              <img
                                className="scale-with-grid"
                                src="assets/images/pic3.png"
                              />
                              <h5>
                                Stella logs on MM and posts her N20, 000,000.00
                              </h5>
                            </div>
                          </div>
                          <div className="column mcb-column one column_divider ">
                            <hr className="no_line" />
                          </div>
                          {/* <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundColor: "#121039",
                                padding: "25px 30px 10px",
                                borderRadius: "15px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "5px" }}
                              >
                                04 —
                              </h6>
                              <h5>Project Manager</h5>
                            </div>
                          </div> */}
                          {/* <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundColor: "#121039",
                                padding: "25px 30px 10px",
                                borderRadius: "15px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "5px" }}
                              >
                                05 —
                              </h6>
                              <h5>Front-end developer</h5>
                            </div>
                          </div> */}
                          {/* <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundColor: "#121039",
                                padding: "25px 30px 10px",
                                borderRadius: "15px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "5px" }}
                              >
                                06 —
                              </h6>
                              <h5>Copywriter</h5>
                            </div>
                          </div> */}
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
          {/* JS */}
        </div>
      </div>
    </>
  );
};

export default About;

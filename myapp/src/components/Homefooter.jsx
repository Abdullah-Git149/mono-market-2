const Homefooter = () => {
  return (
    <>
      <footer id="Footer" className="clearfix">
        <div className="footer_copy">
          <div className="container">
            <div className="column one">
              <a id="back_to_top" className="button button_js" href="#">
                <i className="icon-up-open-big" />
              </a>
              <div className="copyright">
                © 2022 Mony Market
                {/* <a target="_blank" rel="nofollow" href="#">
                  Your Money
                </a> */}
              </div>
              <nav id="social-menu" className="menu-main-menu-footer-container">
                <ul id="menu-main-menu-footer" className="social-menu">
                  <li className="current-menu-item">
                    <a href="index-pay.html">Home</a>
                  </li>
                  <li>
                    <a href="content/pay/about.html">About</a>
                  </li>
                  <li>
                    <a href="content/pay/features.html">Features</a>
                  </li>
                  <li>
                    <a href="content/pay/pricing-list.html">Pricing list</a>
                  </li>
                  <li>
                    <a href="content/pay/contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homefooter;

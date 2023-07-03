import React from "react";
import { Col, Row } from "react-bootstrap";
import Page_Logo from "../assets/img/svg/page_logo.svg";
import Googel_Play from "../assets/img/png/googel_play.png";
import App_store from "../assets/img/png/app_store.png";
import { Discord, Instagram, Twiter } from "./common/Helper";
const MyFooter = () => {
  return (
    <>
      <section className="footer_bg_clr pt-5">
        <div className="sec_custom_container_1140 pt-4">
          <div data-aos="fade-down">
            <a href="#">
              <img src={Page_Logo} alt="Page_Logo" />
            </a>
          </div>
          <Row>
            <Col xs={8} lg={4} data-aos="fade-right">
              <div className="mt-2">
                <p className="fw-normal ff_raleway fs_sm clr_lite_white pe-lg-2 pt-2">
                  Lorem ipsum dolor sit amet consectetur. Neque turpis
                  pellentesque vulputate ut pharetra sodales nunc.
                </p>
                <div className="d-flex align-items-center mt-3 pt-1">
                  <a href="https://play.google.com/store/games?hl=en&gl=US">
                    <img src={Googel_Play} alt="Googel_Play" />
                  </a>
                  <a
                    href="https://www.apple.com/in/app-store/"
                    className="ms-1"
                  >
                    <img src={App_store} alt="App_store" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={7} data-aos="fade-up">
              <Row className="justify-content-between mt-5 mt-lg-0">
                <Col xs={6} sm={2}>
                  <div>
                    <ul className="p-0 m-0">
                      <li className="fw-medium ff_raleway fs_sm text-white">
                        Main
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          About
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Features
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Support
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={6} sm={3}>
                  <div>
                    <ul className="p-0 m-0">
                      <li className="fw-medium ff_raleway fs_sm text-white">
                        Useful links
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Quis ac
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Fermentum justo
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Ornare eu
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Sagittis fringilla
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Platea libero
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={6} sm={3}>
                  <div className="mt-4 mt-sm-0">
                    <ul className="p-0 m-0">
                      <li className="fw-medium ff_raleway fs_sm text-white">
                        Dashboard
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Profile
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Target
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Steller
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Sagittis fringilla
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={6} sm={3}>
                  <div className="mt-4 mt-sm-0">
                    <ul className="p-0 m-0">
                      <li className="fw-medium ff_raleway fs_sm text-white">
                        Other
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="mt-2 mt-md-3">
                        <a
                          href="#"
                          className="ff_manrope fs_xsm fw-normal clr_lite_white "
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={1} className="d-none d-lg-block" data-aos="fade-left">
              <div className="d-flex flex-column align-items-end mt-2">
                <a
                  href="https://twitter.com/home"
                  className="app_bg_circel d-flex justify-content-center align-items-center"
                >
                  <Twiter />
                </a>
                <div className="mt-2 mt-md-3">
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    className="app_bg_circel d-flex justify-content-center align-items-center"
                  >
                    <Instagram />
                  </a>
                </div>
                <div className="mt-3">
                  <a
                    href="https://discord.com/"
                    className="app_bg_circel d-flex justify-content-center align-items-center"
                  >
                    <Discord />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex  gap-5 mt-5 mt-lg-0 d-lg-none">
                <a
                  href="https://twitter.com/home"
                  className="app_bg_circel d-flex justify-content-center align-items-center"
                >
                  <Twiter />
                </a>
                <div>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    className="app_bg_circel d-flex justify-content-center align-items-center"
                  >
                    <Instagram />
                  </a>
                </div>
                <div>
                  <a
                    href="https://discord.com/"
                    className="app_bg_circel d-flex justify-content-center align-items-center"
                  >
                    <Discord />
                  </a>
                </div>
              </div>
        </div>
        <hr className="footer_underline mt-5 w-100" />
        <div className="text-center py-3" data-aos="zoom-in">
          <p className="opacity_08 fw-normal ff_manrope fs_xsm text-white">
            Copyright@2023 | All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default MyFooter;

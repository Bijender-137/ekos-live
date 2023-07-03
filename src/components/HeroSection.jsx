import React from "react";
import { Col, Row } from "react-bootstrap";
import MyNav from "./MyNav";

const HeroSection = () => {
  return (
    <>
      <section className="hero_sec_bg_img vh_100_xl d-flex flex-column position-relative">
      <MyNav/>
        <div className="bg_body position-absolute d-none d-lg-block"></div>
        <div className="sec_custom_container_1140 d-flex flex-column justify-content-end flex-grow-1 pt-5 mt-5">
          <Row className="align-items-center pt-5 mt-5">
            <Col md={8}>
              <div className="d-flex flex-column mb-md-5 pb-md-5">
                <h1 className="ff_raleway fs_xxl text-white text_capital mb-0 fw-normal">
                  Your ultimate <span className="clr_lite_orange"> cloud </span>
                  astrophotography platform
                </h1>
                <p className="ff_manrope fw-normal fs_sm clr_dark_gray mt-2 pt-1">
                  Capture, share, and explore the sky from anywhere and at any
                  time.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-md-end align-items-md-end pb-5 pt-3 pb-md-0 pt-md-0 mb-md-5 pb-md-3 pb-xl-0 mb-xl-0">
                <button className="ff_manrope fw-semibold fs_sm text-white btn_discover border-0">Discover</button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

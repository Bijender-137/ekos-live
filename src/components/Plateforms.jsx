import React from "react";
import { Col, Row } from "react-bootstrap";
import Platform_img from "../assets/img/png/plateform_Sec_img.png";
const Plateforms = () => {
  return (
    <>
      <section className="py-5 position-relative"id="plateform">
        <div className="sec_custom_container_1140 py-lg-5">
          <Row className="py-lg-5">
            <Col xs={10} sm={8} md={6} className="mx-auto" data-aos="fade-right">
              <div className="position-relative ">
                <div className="platform_bg_elips_circel position-absolute platform_blur_set"></div>
                <img
                  className="platform_img_w ms-auto "
                  src={Platform_img}
                  alt="Platform_img"
                />
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <div className="ps-md-2 mt-4 mt-md-0 text-center text-md-start">
                <h2 className="ff_raleway fw-medium fs_xl text-white">
                  Supported Platforms
                </h2>
                <p className="fw-normal ff_manrope fs_sm line_h_180 mt-2 pt-1 clr_lite_white mb-0">
                  Out of the box support for StellarMate, Linux, and MacOS using
                  KStars. 3rd party integrations planned for popular capture
                  software.
                </p>
                <button className="border-0 fw-semibold ff_manrope fs_sm text-white btn_discover mt-4 mt-xl-5">
                  Learn More
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Plateforms;

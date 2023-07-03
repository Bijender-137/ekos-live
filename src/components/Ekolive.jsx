import React from "react";
import EkosLive_img from "../assets/img/png/ekoslive_img.png";
import { Col, Row } from "react-bootstrap";
const Ekolive = () => {
  return (
    <>
      <section className="py-5 zn-1">
        <div className="ekoslive_custome_container pt-lg-5">
          <Row>
            <Col xs={9} md={5} className="mx-auto mx-md-0"> 
              <div className="position-relative text-center text-md-start">
                <div className="bg_circel_ekolives_yellow bg_set_ekolive_yellow position-absolute d-none d-sm-block"></div>
                <div className="bg_circel_ekolives_orange bg_set_ekolive_orange position-absolute"></div>
                <img
                  className="w-100 ekolive_img_w"
                  src={EkosLive_img}
                  alt="EkosLive_img"
                />
              </div>
            </Col>
            <Col md={7}>
              <div className="text-center mt-4 mt-md-0 text-md-start ps-lg-5">
                <h2 className="fs_xl ff_raleway fw-medium text-white mt-3">
                  What is EkosLive?
                </h2>
                <p className="clr_lite_white ff_manrope fw-normal fs_sm line_h_180 max_w_537">
                  EkosLive is an online cloud-based App to remotely control your
                  observatory from anywhere and at any time. Store, search,
                  share, and tag your images. Get notifications about the
                  imaging progress, live-stack deep sky targets, and invite
                  others to join your session. Engage with the astrophotography
                  community and discover new targets and equipment. Use it on
                  your phone, tablet, or computer.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Ekolive;

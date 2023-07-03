import React from "react";
import { Col, Row } from "react-bootstrap";
import Right_icon from "../assets/img/svg/right_icon.svg";
import About_Img from "../assets/img/png/about_sec_img.png";
import Layer_img from "../assets/img/png/layer_about_sec.png";
const About = () => {
  return (
    <>
      <section className="py-5" id="about">
        <div className="sec_custom_container_1140 py-lg-5">
          <Row className="align-items-center justify-content-between flex-column-reverse flex-lg-row">
            <Col lg={5} data-aos="fade-right">
              <div className="mt-4 mt-lg-0">
                <h2 className="fw-medium ff_raleway fs_xl text-white">
                  About EkosLive
                </h2>
                <div className="d-flex align-items-center mt-3">
                  <img
                    height={32}
                    width={32}
                    src={Right_icon}
                    alt="Right_icon"
                  />
                  <p className="fw-normal ff_manrope fs_sm clr_white_204 mb-0 ps-4">
                    Powered by Open Source technologies.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img
                    height={32}
                    width={32}
                    src={Right_icon}
                    alt="Right_icon"
                  />
                  <p className="fw-normal ff_manrope fs_sm clr_white_204 mb-0 ps-4">
                    Transforms your astrophotography capture platform
                    <span className="d-xl-block"></span> to the cloud.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img
                    height={32}
                    width={32}
                    src={Right_icon}
                    alt="Right_icon"
                  />
                  <p className="fw-normal ff_manrope fs_sm clr_white_204 mb-0 ps-4">
                    Online community where you can explore, share, and
                    <span className="d-xl-block"></span>
                    collaborate your passion in Astronomy.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img
                    height={32}
                    width={32}
                    src={Right_icon}
                    alt="Right_icon"
                  />
                  <p className="fw-normal ff_manrope fs_sm clr_white_204 mb-0 ps-4">
                    Access to global community-driven observatories.
                    <span className="d-xl-block"></span> Host and broadcast
                    virtual star parties.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={9} lg={6} className="mx-auto mx-lg-0"  data-aos="fade-left">
              <div>
                <img className="w-100" src={About_Img} alt="About_Img" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;

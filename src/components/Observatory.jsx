import React from "react";
import { Col, Row } from "react-bootstrap";
import Observ_img from "../assets/img/png/observatory_img.png";
import { Right_icon } from "./common/Helper";
const Observatory = () => {
  return (
    <>
      <section className="observatory_bg_img observatry_bg_img_2 py-5 position-relative d-flex align-items-center vh_100_xl">
        <div className="position-absolute bg_body"></div>
        <div className="position-absolute img_left_0 d-none d-xxl-block" data-aos="fade-right">
                <img className="w-100" src={Observ_img} alt="Observ_img" />
              </div>
        <div className="sec_custom_container_1140 py-5">
          <Row className="align-items-center mt -5 ">
            <Col xs={10} md={6} className="mx-auto d-xxl-none" data-aos="fade-right">
              <div className="obeservatory_img_w mx-auto">
                <img className="w-100 obeservatory_img_h" src={Observ_img} alt="Observ_img" />
              </div>
            </Col>
            <Col md={6} xxl={7} className="ms-auto mt-4 mt-md-0" data-aos="fade-left">
              <div className="ps-x l-5 ms-lg-5">
                <h2 className="ff_raleway fw-medium fs_xl text-white text_nowrap_xxl">
                  Lease Observatory
                </h2>
                <div className="d-flex align-items-center mt-3 pt-1">
                  <div>
                    <Right_icon />
                  </div>
                  <p className="ff_manrope fw-normal fs_sm clr_lite_white text_nowrap_xxl mb-0 ps-4 line_h_150">
                    Fine-grained access control for your observatory.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-2 pt-1">
                  <div>
                    <Right_icon />
                  </div>
                  <p className="ff_manrope fw-normal fs_sm clr_lite_white text_nowrap_xxl mb-0 ps-4 line_h_150">
                    Search globally for observatories that fit your specific
                    needs and budget.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-2 pt-1">
                  <div>
                    <Right_icon />
                  </div>
                  <p className="ff_manrope fw-normal fs_sm clr_lite_white text_nowrap_xxl mb-0 ps-4 line_h_150">
                    Earn income by offering your observatory for lease using
                    flexible plans.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Observatory;

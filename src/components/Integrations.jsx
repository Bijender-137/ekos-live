import React from "react";
import { Col, Row } from "react-bootstrap";
import Astrobin from "../assets/img/svg/astrobin.svg";
import Telescope from "../assets/img/svg/telescope.svg";
import Wordwide from "../assets/img/svg/wordwide.svg";
import Astromet from "../assets/img/svg/astromet.svg";
const Integrations = () => {
  return (
    <>
      <section className="py-5 position-relative" id="integration">
        <div className="bg_body position-absolute"></div>
        <div className="platform_bg_elips_circel position-absolute integration_elip_1_set d-none d-sm-block"></div>
        <div className="platform_bg_elips_circel position-absolute integration_elip_2_set d-none d-sm-block"></div>
        <div className="integration_custome_container pb-md-5">
          <h2 className="fs_xl ff_raleway fw-medium text-white text-center">
            Integrations
          </h2>
          <Row className="mt-md-5 pt-4 justify-content-center">
            <Col xs={6} sm={4} md={3}>
              <div className="integration_box text-center h-100 d-flex justify-content-between flex-column">
                <div>
                  <img
                    className="astrobin_img_w"
                    src={Astrobin}
                    alt="Astrobin"
                  />
                </div>
                <p className="fs_lg ff_raleway fw-semibold text-white mt-3 mt-md-4 pt-1 transition_04">
                  Astrobin
                </p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3}>
              <div className="integration_box text-center h-100 d-flex justify-content-between flex-column">
                <div className="text-center">
                  <img
                    className="telescop_img_w"
                    src={Telescope}
                    alt="Telescope"
                  />
                </div>
                <p className="fs_lg ff_raleway fw-semibold text-white transition_04">
                Telescopius
                </p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3}>
              <div className="integration_box text-center h-100 d-flex justify-content-between flex-column mt-4 mt-sm-0">
                <div>
                  <img
                    className="wordwide_img_w"
                    src={Wordwide}
                    alt="Wordwide"
                  />
                </div>
                <p className="fs_lg ff_raleway fw-semibold text-white mt-2 mt-sm-3 mt-md-0 transition_04">
                  Astrobin
                </p>
              </div>
            </Col>
            <Col xs={6} sm={4} md={3}>
              <div className="integration_box text-center h-100 d-flex flex-column justify-content-between mt-4 mt-md-0">
                <div>
                  <img
                    className="pt-2 astromet_img_w"
                    src={Astromet}
                    alt="Astromet"
                  />
                </div>
                <p className="fs_lg ff_raleway fw-semibold text-white transition_04">
                Astrometry.net
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Integrations;

import React from "react";
import { Col, Row } from "react-bootstrap";
import Img_community_1 from "../assets/img/svg/community_1.svg";
import Img_community_2 from "../assets/img/svg/community_2.svg";
import Img_community_3 from "../assets/img/svg/community_3.svg";
import Img_community_4 from "../assets/img/svg/community_4.svg";
import Img_community_5 from "../assets/img/svg/community_5.svg";
import Comunity_img from "../assets/img/png/community_img.png";
const Community = () => {
  return (
    <>
      <section className="py-5 position-relative">
        <div className="bg_circel_ekolives_orange position-absolute community_bg_elips_set"></div>
        <div className="sec_custom_container_1140">
          <div className="text-center text-lg-start" data-aos="fade-down">
            <h2 className="ff_raleway fs_xl fw-medium text-white">
              Community features
            </h2>
            <p className="ff_manrope fw-normal fs_sm line_h_150 clr_white_204">
              Join thousands of amateur and expert astrophotographers worldwide.
            </p>
          </div>
          <Row className="mt-lg-5 pt-3 align-items-center align-items-xxl-start flex-column-reverse flex-lg-row">
            <Col lg={6} xxl={7} data-aos="flip-right">
              <div className="mt-4 mt-lg-0">
                <div className="d-flex align-items-center">
                  <img
                    className="community_icon_width"
                    src={Img_community_1}
                    alt="Img_community_1"
                  />
                  <div className="ps-lg-4 ms-3">
                    <p className="fw-semibold ff_raleway fs_md clr_lite_orange mb-0">
                      Popular
                    </p>
                    <p className="fw-normal ff_manrope fs_sm pt-2 text-white mb-0">
                      Discover most popular images per region, target, mount,
                      and sensor size.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-3 mt-xl-5 pt-2 align-items-center">
                  <img
                    className="community_icon_width"
                    src={Img_community_2}
                    alt="Img_community_2"
                  />
                  <div className="ps-lg-4 ms-3">
                    <p className="fw-semibold ff_raleway fs_md clr_lite_orange mb-0">
                      Top rated
                    </p>
                    <p className="fw-normal ff_manrope fs_sm pt-2 text-white mb-0">
                      Find trending top rated images voted by the community.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-3 mt-xl-5 pt-2 align-items-center">
                  <img
                    className="community_icon_width"
                    src={Img_community_3}
                    alt="Img_community_3"
                  />
                  <div className="ps-lg-4 ms-3">
                    <p className="fw-semibold ff_raleway fs_md clr_lite_orange mb-0">
                      Staff Picks
                    </p>
                    <p className="fw-normal ff_manrope fs_sm pt-2 text-white mb-0">
                      DUnique and memorable photos selected by our
                      astrophotography staff.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-3 mt-xl-5 pt-2 align-items-center">
                  <img
                    className="community_icon_width"
                    src={Img_community_4}
                    alt="Img_community_4"
                  />
                  <div className="ps-lg-4 ms-3">
                    <p className="fw-semibold ff_raleway fs_md clr_lite_orange mb-0">
                      Targets
                    </p>
                    <p className="fw-normal ff_manrope fs_sm pt-2 text-white mb-0">
                      Comprehensive and easy to use target search with advanced
                      planning and filtering capabilities.
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-3 mt-xl-5 pt-2 align-items-center">
                  <img
                    className="community_icon_width"
                    src={Img_community_5}
                    alt="Img_community_5"
                  />
                  <div className="ps-lg-4 ms-3">
                    <p className="fw-semibold ff_raleway fs_md clr_lite_orange mb-0">
                      Nearby
                    </p>
                    <p className="fw-normal ff_manrope fs_sm pt-2 text-white mb-0">
                      DFind who is imaging nearby. Engage with your local
                      community!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-none d-xxl-block">
              <div className="position-absolute community_img_set">
                <img className="w-100" src={Comunity_img} alt="Comunity_img" />
              </div>
            </Col>
            <Col xs={10} lg={6} className="d-xxl-none mx-auto">
              <div className="community_img_width mx-auto">
                <img
                  className="w-100 community_img_h "
                  src={Comunity_img}
                  alt="Comunity_img"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Community;

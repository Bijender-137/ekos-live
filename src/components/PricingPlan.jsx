import React from "react";
import { Col, Row } from "react-bootstrap";
import { Crose, Orange_right } from "./common/Helper";
import Orange_Right from "../assets/img/svg/orange_right_icon.svg";
import Cross_Icon from "../assets/img/svg/cross_icon.svg";
const PricingPlan = () => {
  
  return (
    <>
      <section className="pricing_bg_img py-5 vh_100_xl"id="pricing">
        <div className="sec_custom_container_1140 my-md-5  ">
          <div className="overflow-x-scroll">
          <Row className="width_1100 ms-lg-auto ">
            <Col xs={9} className="ms-auto">
            <h2 className="ff_raleway fs_xl text-white fw-medium">Pricing Plans</h2>
                <Row className="mt-4">
                  <Col xs={3} className="p-0">
                    <div className="bg_clr_princing_box_1 d-flex flex-column align-items-center">
                      <div className="pt-5"></div>
                      <ul className="p-0 m-0 pt-4">
                        <li className="ff_raleway fw-normal fsxs text-white pt-5 ">
                          Online Access
                        </li>
                        <li className="ff_raleway fw-normal fsxs text-white pt-5 ">
                          Cloud Storage
                        </li>
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 ">
                          Observatory Lease
                        </li>
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 ">
                          Spectators
                        </li>
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 ">
                          Push Notifications
                        </li>
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 ">
                          Broadcasting
                        </li>
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 ">
                          Access Control
                        </li>
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 pb-4">
                          Price
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col xs={3} className="p-0 ">
                    <div className="pricing_box h-100">
                    <div className="text-center">
                      <div className="bg_clr_princing_box_1 princing_box_p bg_clr">
                        <p className="mb-0 ff_raleway fw-semibold fs_md text-white">
                          EkosLive Basic
                        </p>
                      </div>
                      <ul className="p-0 m-0 pricing_plan_box transition_04">
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 ">
                          <img
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-3">
                          500 MB
                        </li>
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5">
                          <img width={24} src={Cross_Icon} alt="Cross_Icon" />
                        </li>
                        <li className="pt-5">
                          <Crose />
                        </li>
                        <li className="pt-4 mt-3">
                          <Crose />
                        </li>
                        <li className="pt-5">
                          <Crose />
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-3 ">
                          Access Control
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-5  pb-3">
                          Price
                        </li>
                      </ul>
                      <div className="pt-2">
                      <button className="border-0 btn_choose_plan mt-4 ff_manrope fw-semibold text-white fs_sm">
                          Choose Plan
                        </button>
                      </div>
                      </div>
                      </div>
                  </Col>
                  <Col xs={3} className="p-0 ">
                    <div className="text-center pricing_box h-100">
                      <div className="bg_clr_princing_box_1 princing_box_p bg_clr ">
                        <p className="mb-0 ff_raleway fw-semibold fs_md text-white">
                          EkosLive Pro
                        </p>
                      </div>
                      <ul className="p-0 m-0 pricing_plan_box transition_04">
                        <li className="pt-5">
                          <img
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-3 ">
                          5 GB
                        </li>
                        <li className="pt-5">
                          <img width={24} src={Cross_Icon} alt="Cross_Icon" />
                        </li>
                        <li className="pt-4 mt-3 ">
                          <img
                            className="pt-2"
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="pt-4 mt-2 ">
                          <img
                            className="pt-2"
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-5">
                          Yes, Limited
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-3 ">
                          Limited to 5 visitors
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-4 pb-3">
                          $4.99
                        </li>
                      </ul>
                      <div className="mt-2">
                        <button className="border-0 btn_choose_plan mt-4 ff_manrope fw-semibold text-white fs_sm">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} className="p-0 pricing_plan_box_2 pricing_box">
                  <div className="text-center  h-100">
                      <div className="bg_clr_princing_box_1 princing_box_p bg_clr ">
                        <p className="mb-0 ff_raleway fw-semibold fs_md text-white bg_clr">
                          EkosLive Ultimate
                        </p>
                      </div>
                      <ul className="p-0 m-0 pricing_plan_box transition_04">
                        <li className="ff_raleway fw-normal fs_sm text-white pt-5 ">
                          <img
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-3 ">
                          20 GB
                        </li>
                        <li className="pt-5">
                          <img
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="pt-4 mt-3">
                          <img
                            className="pt-2"
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="pt-4 mt-3">
                          <img
                            width={24}
                            src={Orange_Right}
                            alt="Orange_Right"
                          />
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-5">
                          Yes, Full
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-3 ">
                          Unlimited
                        </li>
                        <li className="ff_raleway fw-medium fs_md text-white pt-4 mt-3 pb-4">
                          $9.99
                        </li>
                      </ul>
                      <div className="mt-2 ">
                        <button className="border-0 btn_choose_plan mt-4 ff_manrope fw-semibold text-white fs_sm">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;

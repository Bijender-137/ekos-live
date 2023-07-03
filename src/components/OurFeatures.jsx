import React from "react";
import { Col, Row } from "react-bootstrap";
import { Clouds, Community, Hours, Obeservatory } from "./common/Helper";
import { Carddata } from "./common/MapData";
import Slider from "react-slick";
const OurFeatures = () => {
 
  return (
    <>
      <section className="our_features_bg_img py-5 position-relative"id="features">
        <div className="bg_body position-absolute"></div>
        <div className="sec_custom_container_1140 py-lg-5">
          <div className="text-center">
            <h2 className="ff_raleway fw-medium fs_xl text-white">
              Our Features
            </h2>
          </div>
          <Row className="mt-3 mt-md-5 justify-content-center">
            {Carddata.map((obj) => (
              <Col sm={6} md={4} lg={3} className="mb-4 m-lg-0">
                <div className="our_featur_box_layout h-100 mob_slider gap-4">
                  {obj.icons}
                  <h2 className="fs_md ff_raleway fw-semibold text-white mt-4 text_capital">
                    {obj.heading}
                  </h2>
                  <p className="fw-normal ff_manrope fs_sm clr_lite_white pe-3 mt-3 line_h_150">
                    {obj.para}
                  </p>

                  <p className="fw-normal ff_manrope fs_sm clr_lite_white pe-2  line_h_150 mb-0">
                    <span className="pe-1"> {obj.counting}</span>
                    {obj.paratwo}
                  </p>
                  <p className="fw-normal ff_manrope fs_sm clr_lite_white pe-2  line_h_150 mb-0">
                    <span className="pe-1">{obj.countingtwo}</span>
                    {obj.paratwo}
                  </p>
                  <p className="fw-normal ff_manrope fs_sm clr_lite_white pe-2 line_h_150 mb-0">
                    <span className="pe-1">{obj.countingthree}</span>
                    {obj.parafour}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default OurFeatures;

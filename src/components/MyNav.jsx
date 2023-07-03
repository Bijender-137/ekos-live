import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Nav_logo from "../assets/img/svg/page_logo.svg";
import { Search_logo } from "./common/Helper";
const MyNav = () => {
  const [open, setopen] = useState(true);
  if (open) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <section className="navbar_bg_clr position-relative">
        <nav className="py-3">
          <Container>
            <div className="py-1 d-flex align-items-center justify-content-between">
              <img src={Nav_logo} alt="Nav_logo" />
              <div className="ms-md-4 d-flex align-items-center gap-3 d-none d-md-block">
                <div className="input_bg_clr pe-3 ms-xxl-5">
                  <input
                    type="text"
                    className="ff_raleway fw-normal fs_sm fst-italic border-0 py-3 ps-4 clr_white_204 bg-transparent w-100 "
                    placeholder="Search here..."
                  />
                  <div className="cursor_pointer">
                    <Search_logo />
                  </div>
                </div>
              </div>
              <ul
                className={
                  open === false
                    ? "p-0 m-0 d-flex align-items-center ps-lg-3 ps-xxl-5 nav-sec-2 flex-column justify-content-center gap-4 gap-xl-0 flex-xl-row "
                    : "p-0 m-0 d-flex align-items-center ps-lg-3 ps-xxl-5 nav-sec "
                }
              >
                <li>
                  <a  onClick={() => setopen(!open)}
                    href="#about"
                    className="ff_raleway fs_sm fw-normal clr_lite_white"
                  >
                    About
                  </a>
                </li>
                <li className="ms-xxl-4 ms-lg-3">
                  <a onClick={() => setopen(!open)}
                    href="#features"
                    className="ff_raleway fs_sm fw-normal clr_lite_white"
                  >
                    Features
                  </a>
                </li>
                <li className="ms-xxl-4 ms-lg-3">
                  <a onClick={() => setopen(!open)}
                    href="#pricing"
                    className="ff_raleway fs_sm fw-normal clr_lite_white"
                  >
                    Pricing
                  </a>
                </li>
                <li className="ms-xxl-4 ms-lg-3">
                  <a onClick={() => setopen(!open)}
                    href="#plateform"
                    className="ff_raleway fs_sm fw-normal clr_lite_white"
                  >
                    Support
                  </a>
                </li>
                <li className="ms-xxl-4 ms-lg-3">
                  <a onClick={() => setopen(!open)}
                    href="#integration"
                    className="ff_raleway fs_sm fw-normal clr_lite_white"
                  >
                    FAQs
                  </a>
                </li>
                <div className="d-lg-none">
                  <button className=" btn_nav bg-transparent ff_raleway fs_sm fw-normal text-white">
                    Login
                  </button>
                  <button className="ms-4 btn_nav_sign ff_raleway fs_sm fw-normal text-white">
                    SignUp
                  </button>
                </div>
                <div className="input_bg_clr pe-3 ms-xxl-5 d-md-none">
                  <input
                    type="text"
                    className="ff_raleway fw-normal fs_sm fst-italic border-0 py-3 ps-4 clr_white_204 bg-transparent w-100 "
                    placeholder="Search here..."
                  />
                  <div className="cursor_pointer">
                    <Search_logo />
                  </div>
                </div>
              </ul>
              <div className="d-none d-lg-flex d-xl-flex d-flex align-items-center">
                <button className="ms-5 btn_nav bg-transparent ff_raleway fs_sm fw-normal text-white">
                  Login
                </button>
                <button className="ms-2 btn_nav_sign ff_raleway fs_sm fw-normal text-white">
                  SignUp
                </button>
              </div>
              <div
                onClick={() => setopen(!open)}
                className={
                  open === true
                    ? "d-xl-none cursor_pointer menubar pt-1"
                    : "d-xl-none cursor_pointer menubar-2 pt-1"
                }
              >
                <span className="lining"></span>
                <span className="lining my-2"></span>
                <span className="lining"></span>
              </div>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default MyNav;

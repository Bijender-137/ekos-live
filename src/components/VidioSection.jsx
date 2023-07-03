import React, { useRef, useState } from "react";
import Vidio_icon from "../assets/img/svg/vidio_icon.svg"
import videoPoster from '../assets/img/png/vidio_img.png'
const Video = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [showControls, setShowControls] = useState(false);

  console.log(videoPlay);
  const videoRef = useRef(null);
  const videoClickHandler = () => {
    setShowControls(true);
    setVideoPlay(true);
    videoRef.current.play();
  };
  return (
    <>
      <section className="py-5">
        <div className="sec_custom_container_1140 py-sm-5">
          <div className="position-relative">
            <span onClick={videoClickHandler} className={"position-absolute vidio_icon_set cursor_pointer "}>
             <img src={Vidio_icon} alt="Vidio_icon" />
            </span>
            <video
              poster={videoPoster}
              className="w-full h-full"
              muted
              loop
              controls
              src={<iframe width="100%" height="640" src="https://www.youtube.com/embed/vy4C93X9DQk" title="Radial Code Pvt Ltd Web Development and Web Designing Agency - Hisar(Haryana)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
            ></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
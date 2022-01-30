import mug2 from "../img/mug2.png";
import mug3 from "../img/mug3.png";
import mug4 from "../img/mug4.png";
import React, { useState } from "react";
import Carousel from "react-simply-carousel";

function CarouselComp() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Carousel
      updateOnItemClick
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
        },
      }}
      activeSlideIndex={activeSlide}
      activeSlideProps={{
        style: {
          background: "",
        },
      }}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        children: ">",
        style: {
          width: 60,
          height: 60,
          minWidth: 60,
          alignSelf: "center",
        },
      }}
      backwardBtnProps={{
        children: "<",
        style: {
          width: 60,
          height: 60,
          minWidth: 60,
          alignSelf: "center",
        },
      }}
      itemsToShow={4}
      speed={400}
    >
      <div style={{ width: 300, height: 300 }}>
        {" "}
        <img className="main1" src={mug2} alt="" />
      </div>
      <div style={{ width: 300, height: 300 }}>
        {" "}
        <img className="main1" src={mug3} alt="" />
      </div>
      <div style={{ width: 300, height: 300 }}>
        {" "}
        <img className="main1" src={mug4} alt="" />
      </div>
      <div style={{ width: 300, height: 300 }}>
        {" "}
        <img className="main1" src={mug2} alt="" />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img className="main1" src={mug2} alt="" />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img className="main1" src={mug2} alt="" />
      </div>
    </Carousel>
  );
}

export default CarouselComp;

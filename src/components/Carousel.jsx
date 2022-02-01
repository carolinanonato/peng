import mug2 from "../img/mug2.png";
import mug6 from "../img/mug6.png";
import mug4 from "../img/mug4.png";
import mug5 from "../img/mug5.png";
import mug7 from "../img/mug7.png";
import mug8 from "../img/mug8.png";
import mug9 from "../img/mug9.png";
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
          border: 0,
          background: "bisque",
          fontWeight: 900,
        },
      }}
      backwardBtnProps={{
        children: "<",
        style: {
          width: 60,
          height: 60,
          minWidth: 60,
          alignSelf: "center",
          border: 0,
          background: "bisque",
          fontWeight: 900,
        },
      }}
      itemsToShow={5}
      speed={400}
    >
      <div id="shop" style={{ width: 300, height: 300, textAlign: "center" }}>
        <img
          className="main1"
          src={mug2}
          alt=""
          style={{ width: 150, height: 150 }}
        />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img
          className="main1"
          src={mug5}
          alt=""
          style={{ width: 150, height: 150 }}
        />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img
          className="main1"
          src={mug4}
          alt=""
          style={{ width: 150, height: 150 }}
        />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img
          className="main1"
          src={mug6}
          alt=""
          style={{ width: 150, height: 150 }}
        />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img
          className="main1"
          src={mug7}
          alt=""
          style={{ width: 150, height: 150 }}
        />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img
          className="main1"
          src={mug8}
          alt=""
          style={{ width: 150, height: 150 }}
        />
      </div>
      <div style={{ width: 300, height: 300 }}>
        <img
          className="main1"
          src={mug9}
          alt=""
          style={{ width: 150, height: 150 }}
        />
      </div>
    </Carousel>
  );
}

export default CarouselComp;

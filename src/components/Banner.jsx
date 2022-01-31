import React from "react";
import main from "../img/main1.png";

function Banner() {
  return (
    <>
      <div className="banner">
        <img className="main1" src={main} alt="" />
        <blockquote>
          "One can’t be angry when one looks at a Penguin"
          <p>John Ruskin - English art critic</p>
        </blockquote>
      </div>
    </>
  );
}

export default Banner;

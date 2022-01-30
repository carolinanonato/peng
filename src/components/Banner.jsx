import React from "react";
import main from "../img/main1.png";

function Banner() {
  return (
    <>
      <div className="banner">
        <img className="main1" src={main} alt="" />
        <h1>
          ‘One can’t be angry when one looks at a Penguin’ - English art critic
          John Ruskin
        </h1>
      </div>
    </>
  );
}

export default Banner;

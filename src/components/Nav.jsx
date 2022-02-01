import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import Hamburger from "./Hamburger";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="navleft">
        <a className="name-title" href="#home">
          Peng
        </a>
        <div className="navright">
          <a className="item" href="#shop">
            <AnchorLink href="#shop">Shop</AnchorLink>
          </a>
          <a className="item" href="#about">
            <AnchorLink href="#about">About</AnchorLink>
          </a>
          <a className="item" href="cart">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger />

          <style jsx>
            {`
              @media (max-width: 600px) {
                .hamburger {
                  display: fixed;
                  margin-left: 10px;
                  z-index: 6;
                  top: 10px;
                }
                .navright {
                  display: ${hamburgerOpen ? "inline" : "none"};
                  background-color: rgba(53, 32, 32, 0.849);
                  height: 300px;
                  width: 50vw;
                  margin-top: 50px;
                  position: fixed;
                }
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
}

export default Nav;

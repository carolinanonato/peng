import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import Hamburger from "./Hamburger";

function Nav() {
  return (
    <>
      <div className="navleft">
        <a className="name-title" href="#home">
          Peng
        </a>

        <div className="navright">
          <a className="item" href="#shop">
            Shop
          </a>
          <a className="item" href="#about">
            About
          </a>
          <a className="item" href="card">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </div>
        <Hamburger />
      </div>
    </>
  );
}

export default Nav;

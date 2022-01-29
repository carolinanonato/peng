import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

function Nav() {
  return (
    <>
      <div className="navleft">
        <a className="active" href="#home">
          Peng
        </a>

        <div className="navright">
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="card">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;

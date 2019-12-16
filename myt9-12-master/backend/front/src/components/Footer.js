import React from "react";
import homeIcon from "../img/homeIcon.png";
import "./styles.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Link to="/"> <img className="Footer" src={homeIcon} alt="logo" /></Link>
    </React.Fragment>
    );
  }
}

export default Footer;

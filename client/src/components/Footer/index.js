import React from "react";
import {Container} from "../Grid"
import "./style.css";

function Footer() {
  return (

    <div className="footer">
      <Container>
        <div className="wrapper row">
        <p className = "builtBy"> Copyright © 2021
        </p>
        </div>
      </Container>
    </div>
    
  );
}

export default Footer;
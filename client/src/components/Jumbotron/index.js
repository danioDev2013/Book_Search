import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
        <div
        style={{ height: 450 }}
        className="jumbotron jumbotron-fluid d-flex align-items-center">
            <div className="container text-center">
                {children}
            </div>
        </div>
    );
}

export default Jumbotron;
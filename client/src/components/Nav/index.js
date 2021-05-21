import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Books</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav d-flex  ml-auto mt-2 mt-lg-0 text-white">
                    <li className="nav-item" id="home">
                        <a className="nav-link mr-4 " href="/">Search Books</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

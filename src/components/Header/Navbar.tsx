import React, { Component } from "react";
import Logo from "../../images/logo.png";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-light">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={Logo} alt="Logo..." className="logo"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        )
    }
}

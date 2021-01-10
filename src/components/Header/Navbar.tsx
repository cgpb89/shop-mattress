import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.png";
import { Cart } from "../../App";

interface NavbarProps {
    cartItems: Cart[]
}

export default class Navbar extends Component<NavbarProps, any> {
    render() {
        const { cartItems } = this.props;
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
                                <li className="nav-item shopping-cart">
                                    <a className="nav-link" aria-current="page" href="/#">
                                        <FontAwesomeIcon className="shopping-cart-icon" icon={faShoppingCart} />
                                        {cartItems.length > 0 ?
                                            <span className="badge">
                                                {cartItems.length}
                                            </span> :
                                            <></>
                                        }
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

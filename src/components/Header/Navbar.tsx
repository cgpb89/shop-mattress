import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.png";
import { CartItem } from "../../App";
import GlobalModal from "../Global/GlobalModal";
import CartDetails from "./CartDetails";
import Mattress from "../../model/Mattress";

interface NavbarProps {
    cartItems: CartItem[],
    checkoutOrder: () => void
    isCheckout: boolean,
    removeItemFromCart: (value: Mattress) => void;
}

export default class Navbar extends Component<NavbarProps, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        }
      }

      public toggle = () => {
          this.setState({isOpen: !this.state.isOpen})
      }

    render() {
        const { cartItems, isCheckout, checkoutOrder, removeItemFromCart } = this.props;
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-light">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={Logo} alt="Logo..." className="logo"></img></a>
                        <div className="" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item shopping-cart">
                                    <a onClick={()=> this.toggle()} className="nav-link" aria-current="page" href="/#">
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
                <GlobalModal 
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    size={"md"}
                    content={
                    <CartDetails 
                    cartItems={cartItems}
                    isCheckout={isCheckout}
                    checkoutOrder={checkoutOrder}
                    removeItemFromCart={removeItemFromCart}
                    />}
                />
            </nav>
        )
    }
}

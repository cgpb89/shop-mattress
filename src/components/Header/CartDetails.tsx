import React, { Component } from 'react'
import { CartItem } from '../../App'
import Mattress from '../../model/Mattress';
import formatCurrency from '../../utils/utils';

interface CartDetailsProps {
    cartItems: CartItem[],
    checkoutOrder: () => void,
    isCheckout: boolean,
    removeItemFromCart: (value: Mattress) => void;
}

export default class CartDetails extends Component<CartDetailsProps, any> {

    private getImage = (image: string) => {
        return `../images/${image}`;
    }

    private renderCartItems = () => {
        const { cartItems, removeItemFromCart, isCheckout } = this.props;

        return cartItems.map((item: CartItem, index: number) => {
            return (
                <div className={`cart-item`} key={`cart-item-${index}`}>
                    <div className={`cart-item-image`}>
                        <img src={this.getImage(item.product.get_ImageFileName())} alt={item.product.get_Name()} />
                        <div className="item-details">
                            <span>{item.product.get_Name()}</span>
                        </div>
                    </div>
                    <div className={`cart-item-quantity`}>
                        <p>
                            <span>Price: {formatCurrency(item.product.get_Price())}</span>
                            <span>Quantity:{item.count} </span>
                        </p>
                    </div>
                    <div>
                        <button
                            disabled={isCheckout}
                            onClick={() => removeItemFromCart(item.product)}
                            className="btn btn-light remove-button">
                            Remove
                    </button>
                    </div>
                </div>
            )
        });
    }

    render() {
        const { cartItems, checkoutOrder, isCheckout } = this.props;

        if (cartItems.length === 0) {
            return <span className="cart-empty">The cart is empty</span>
        }

        return (
            <div className="cart-details">
                {this.renderCartItems()}
                <div className={`checkout-order`}>
                    <button onClick={() => checkoutOrder()} className="btn btn-light checkout-button">
                        Proceed to Checkout
                    </button>
                    {isCheckout ?
                        <span className={`order-success`}>Your order has been checkout!!!</span>
                        : <></>}
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Mattress from '../../model/Mattress'
import MattressType from '../../model/MattressType'
import formatCurrency from "../../utils/utils";
import RatingStart from '../Global/RatingStart';

interface SelectProductProps {
    productList: MattressType[],
    selectedProduct: (value: Mattress) => void,
    productSelected: Mattress,
    addItemToCart: (value: Mattress) => void,
}

export default class SelectProduct extends Component<SelectProductProps, any> {

    private renderButtonGroup = () => {
        const { productList, selectedProduct, productSelected } = this.props;

        return (
            <div className="btn-group me-2" role="group" aria-label="Second group">
                {productList.map((item: MattressType, index: number) => {
                    return (
                        <button
                            onClick={() => selectedProduct(item.get_Mattress())}
                            key={`button-${item.get_Mattress().get_Name()}`}
                            type="button"
                            className={`btn btn-outline-secondary ${productSelected.get_Name() === item.get_Mattress().get_Name() ? "active-product" : ""}`}>
                            {item.get_Mattress().get_Name()}
                        </button>
                    )
                })}
            </div>);

    }

    render() {
        const { productSelected, addItemToCart } = this.props;

        return (
            <div className="select-product">
                <div>
                    <h6>Select Mattress Type</h6>
                </div>
                {this.renderButtonGroup()}
                <div className="product-details">
                    <div>
                        <span>{productSelected.get_Name()}</span>
                        <RatingStart
                            label="Rating"
                            size={30}
                            value={productSelected.get_ReviewRating()}
                         />
                    </div>
                    <div>
                        <span>{formatCurrency(productSelected.get_Price())}</span>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => addItemToCart(productSelected)}
                        type="button"
                        className="btn btn-light add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}

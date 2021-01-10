import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar';
import ProductContainer from './components/Products/ProductContainer';
import { ParseJson } from './utils/parseJson';
import Mattress from './model/Mattress';

const data = new ParseJson().ParseJsonData();

export interface CartItem {
  product: Mattress,
  count: number
}

export interface Cart {
  item: CartItem
}

class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      productSelected: data[0].get_Mattress(),
      cartItems: []
    }
  }

  addItemToCart = (item: Mattress) => {
    const cartItems = this.state.cartItems;
    let alreadyInCart = false;

    cartItems.forEach((element: CartItem) => {
      if (element.product.get_Name() === item.get_Name()) {
        element.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ product: item, count: 1 });
    }

    this.setState({ cartItems });
  }

  selectedProduct = (product: Mattress) => {
    this.setState({ productSelected: product })
  }

  render() {

    if (data.length < 0) {
      return (
        <div className="spinner-border mt-5 ml-5" role="status">
          <span className="visually-hidden"></span>
        </div>
      )
    }

    console.log("cart", this.state.cartItems);

    return (
      <div>
        <Navbar
          cartItems={this.state.cartItems}
        />
        <ProductContainer
          productSelected={this.state.productSelected}
          selectedProduct={this.selectedProduct}
          productList={data}
          addItemToCart={this.addItemToCart} />
      </div>
    );
  }

}

export default App;

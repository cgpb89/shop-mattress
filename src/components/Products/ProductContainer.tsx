import React from 'react'
import { Container, Row } from "reactstrap";
import Mattress from '../../model/Mattress';
import MattressType from '../../model/MattressType';
import SelectProduct from './SelectProduct';

interface ProductContainerProps {
    productList: MattressType[],
    selectedProduct: (value: Mattress) => void,
    productSelected: Mattress,
    addItemToCart: (value: Mattress) => void,
}

class ProductContainer extends React.Component<ProductContainerProps, any> {

    public getImage = (image: string) => {
        return `../images/${image}`;
    }

    render() {
        const { productList, selectedProduct, productSelected,addItemToCart } = this.props;

        return (
            <div>
                <Container className="product-container">
                    <Row className="product">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 image-container">
                             <img src={this.getImage(productSelected.get_ImageFileName())} alt={productSelected.get_Name()}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 description-container">
                            <h3>Choose Your Mattress</h3>
                            <SelectProduct
                                productSelected={productSelected}
                                selectedProduct={selectedProduct}
                                productList={productList}
                                addItemToCart={addItemToCart}
                            />
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProductContainer;
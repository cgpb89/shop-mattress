import React from 'react'
import Mattress from '../../model/Mattress';
import MattressType from '../../model/MattressType';
import GlobalModal from '../Global/GlobalModal';
import SelectProduct from './SelectProduct';

interface ProductContainerProps {
    addItemToCart: (value: Mattress) => void,
    productList: MattressType[],
    productSelected: Mattress,
    selectedProduct: (value: Mattress) => void,
}

class ProductContainer extends React.Component<ProductContainerProps, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    public toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    public getImage = (image: string) => {
        return `../images/${image}`;
    }

    public modalContent = (): React.ReactElement => {
        const { productSelected } = this.props;
        return (
            <div>
                <img onClick={() => this.toggle()} src={this.getImage(productSelected.get_ImageFileName())} alt={productSelected.get_Name()} />
            </div>
        )
    }

    render() {
        const { productList, selectedProduct, productSelected, addItemToCart } = this.props;

        return (
            <div>
                <div className="container product-container">
                    <div className="row product">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 image-container">
                            <img onClick={() => this.toggle()} src={this.getImage(productSelected.get_ImageFileName())} alt={productSelected.get_Name()} />
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
                    </div>
                </div>

                <GlobalModal
                    modalTitle={productSelected.get_Name()}
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    content={this.modalContent()}
                    size={"xl"}
                />
            </div>
        )
    }
}

export default ProductContainer;
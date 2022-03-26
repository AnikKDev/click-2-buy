import React from 'react';
import { Card } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './ProductCard.css';
const ProductCard = ({ productDetails, addToCartBtn }) => {
    const { name, img, price } = productDetails;
    return (
        // card container
        <div className='col-md-4 mb-5 d-flex justify-content-center'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    {/* add to cart btn */}
                    <button onClick={() => addToCartBtn(productDetails)} className='add-to-cart-btn'>Add To Cart <BsFillCartPlusFill /></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
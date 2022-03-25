import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({ productDetails }) => {
    const { name, id, img, price } = productDetails;
    console.log(name)
    return (
        <div className='col-md-4 mb-5 d-flex justify-content-center'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Price: {price}</p>
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
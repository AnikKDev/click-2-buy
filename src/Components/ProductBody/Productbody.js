import React, { useEffect, useState } from 'react';
import ProductCard from '../Productcard/ProductCard';
import './Productbody.css';
const Productbody = () => {
    const [showProducts, setShowProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setShowProducts(data))
    }, []);
    // console.log(showProducts)
    return (
        <div className='row gx-0 parent-div'>
            <div className='col-md-8 product-container-parent'>
                <div className="product-container">
                    <h2 className=''>Products</h2>

                    <div className="row">
                        {showProducts.map(product => <ProductCard
                            key={product.id}
                            productDetails={product}

                        ></ProductCard>)}
                    </div>
                </div>
            </div>
            <div className='col-md-4 selected-item-container-parent'>
                <div className="selected-item-container">
                    <h2>selected Items</h2>
                </div>
            </div>
        </div>
    );
};

export default Productbody;
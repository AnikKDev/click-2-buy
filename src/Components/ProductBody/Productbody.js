import React, { useEffect, useState } from 'react';
import ProductCard from '../Productcard/ProductCard';
import SelectedDevice from '../SelectedDevice/SelectedDevice';
import './Productbody.css';
const Productbody = () => {
    const [showProducts, setShowProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setShowProducts(data))
    }, []);


    const [phoneData, setPhoneData] = useState([])
    const addToCartBtn = (product) => {
        const newPhoneData = [...phoneData, product]
        setPhoneData(newPhoneData)
    };

    const [selectedDevice, setSelectedDevice] = useState([]);
    const generateRandomPhone = (phone) => {
        let numb = Math.floor(Math.random() * phone.length);
        setSelectedDevice(phone[numb]);
    }

    const chooseAgain = () => {
        setSelectedDevice([]);
    }
    // console.log(phoneData.length);
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
                            addToCartBtn={addToCartBtn}

                        ></ProductCard>)}
                    </div>
                </div>
            </div>
            <div className='col-md-4 selected-item-container-parent'>
                <div className="selected-item-container">
                    <h2>selected Items</h2>
                    {phoneData.map(phone => <SelectedDevice
                        key={phone.id}
                        phone={phone}
                    ></SelectedDevice>)}
                    <div className="d-flex flex-column align-items-center">
                        <div>
                            <h4>{selectedDevice.name}</h4>
                        </div>
                        <button onClick={() => generateRandomPhone(phoneData)} className='choose-item-btn'>CHOOSE ONE FOR ME</button>
                        <button onClick={() => chooseAgain(selectedDevice)} className='choose-item-btn'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productbody;
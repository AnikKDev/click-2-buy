import React, { useEffect, useState } from 'react';
import ProductCard from '../Productcard/ProductCard';
import SelectedDevice from '../SelectedDevice/SelectedDevice';
import './Productbody.css';
const Productbody = () => {
    // Fetching data from json file
    const [showProducts, setShowProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setShowProducts(data))
    }, []);
    // add products to a container
    const [phoneData, setPhoneData] = useState([])
    const addToCartBtn = (product) => {
        const found = phoneData.find(phone => phone.id === product.id);
        if (phoneData.length < 4) {
            if (!found) {
                const newPhoneData = [...phoneData, product]
                setPhoneData(newPhoneData);
            }
        }
    };
    // picks a random product
    const [selectedDevice, setSelectedDevice] = useState([]);
    const generateRandomPhone = (phone) => {
        let numb = Math.floor(Math.random() * phone.length);
        setSelectedDevice(phone[numb]);
    }
    // clears the selected items
    const chooseAgain = () => {
        setPhoneData([]);
    }
    return (
        <div className='row gx-0 parent-div'>
            <div className='col-md-8 '>
                <div className="product-container mt-5">
                    <div className="row">
                        {/* map through the products array and create cards with different product*/}
                        {showProducts.map(product => <ProductCard
                            key={product.id}
                            productDetails={product}
                            addToCartBtn={addToCartBtn}

                        ></ProductCard>)}
                    </div>
                </div>
            </div>
            {/* Selected Items Container */}
            <div className='col-md-4'>
                <div className="selected-item-container">
                    <h2 className='mb-4 mt-4 pt-3 text-center'>Selected Items</h2>
                    {/* shows the selected devices */}
                    {phoneData.map(phone => <SelectedDevice
                        key={phone.id}
                        phone={phone}
                    ></SelectedDevice>)}
                    <div className="d-flex flex-column align-items-center pb-5">
                        <div>
                            {/* choose random device */}
                            <h4 className='text-center mb-3'>Random Result</h4>
                            <div className='d-flex px-5 align-items-center mb-3'>
                                <img className='selected-device-img' src={selectedDevice?.img} alt="" />
                                <h5 className='ms-2'>{selectedDevice?.name}</h5>
                            </div>

                        </div>
                        {/* generate random device */}
                        <button onClick={() => generateRandomPhone(phoneData)} className='choose-item-btn mb-2'>CHOOSE ONE FOR ME</button>
                        {/* clears the entire 'selected device' field */}
                        <button onClick={() => chooseAgain(selectedDevice)} className='choose-item-btn'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productbody;
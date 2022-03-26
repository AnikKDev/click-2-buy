import React from 'react';
import './SelectedDevice.css';
const SelectedDevice = ({ phone }) => {
    const { img, name } = phone;
    return (
        <div>
            {/* shows selected devices */}
            <div className='d-flex justify-content-between px-5 align-items-center mb-3'>
                <div className='img-thumbnail'><img src={img} alt="" /></div>
                <h6>{name}</h6>
            </div>
            <hr />
        </div>
    );
};

export default SelectedDevice;
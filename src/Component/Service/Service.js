import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name,img,Details,price}=props.material
    return (
        <div className='single-card'>
            <div className="card-body">
                <img className='img-thumbnail' src={img} alt="" srcset="" />
                <h5 className="card-title">{name}</h5>
                <h6>Fees: ${price}</h6>
                <p className="card-text">{Details}</p>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import './Study.css';

const Study = (props) => {
    const { name, Details, img,price } = props.material;
    return (
        <div className='single-cards'>
            <div className="card-body">
                <img className='img-thumbnail' src={img} alt="" srcset="" />
                <h5 className="card-title">{name}</h5>
                <h6>Fees: ${price}</h6>
                <p className="card-text">{Details}</p>
            </div>
        </div>
    );
};

export default Study;
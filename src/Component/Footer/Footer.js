import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-dark p-3'>
            <div className='col-4 container'>
                <div className="input-group  w-5">
                    <input type="text" className="form-control" placeholder="Email" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">Subscribe</span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;
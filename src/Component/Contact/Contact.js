import React from 'react';
import './Contact.css';
import contact from '../../contact.jpeg';

const Contact = () => {
    return (
        <div className='contact-us'> 
            <img src={contact} alt="" />
            <div className='container contact-form'>
                <h1>Contact Us</h1>
                <form className="row g-3 p-3">
                    <div className="col-md-6">
                        <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Your Email' />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputPassword4" placeholder='Cause To contact' />
                    </div>
                    <div className="col-12">

                        <input type="text" className="form-control" id="inputAddress" placeholder="Address: 1234 Main St" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>Uttara</option>
                            <option>Badda</option>
                            <option>Mirpur</option>
                            <option>Shamoly</option>
                            <option>Motizhil</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
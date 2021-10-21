import React from 'react';
import './about.css';
import image from '../../about-us.jpg';

const About = () => {
    return (
        <div>
            <h1 className='fs-1 p-5 about-us'>ABOUT US</h1>
            <div>
                <div className="container">
                    <div className="row p-5">
                        <div className="col">
                            <h1>WHO WE ARE</h1>
                            <p>Our pathway programmes provide the language, academic and social skills that students need for university progression and continued success after they graduate. Their success is key to the decisions we make, from the programmes we offer to supporting them in their journey.

                                The universities we work with trust us to increase their international footprint, access student diversity and provide assured progression, so they can continue to focus on academic excellence.</p>
                        </div>
                        <div className="col-6 image">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
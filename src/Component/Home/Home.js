import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Study from '../Study/Study';
import './Home.css';
import slider1 from '../../slider1.jpeg';
import slider2 from '../../slider2.jpeg';
import slider3 from '../../slider3.jpeg';


const Home = () => {
    const [materials, setMetarial] = useState([]);
    useEffect(() => {
        fetch('./home-study.JSON')
            .then(res => res.json())
            .then(data => setMetarial(data))
    }, []);
    console.log(materials)
    return (
        <div>
            {/* home page slider */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner mb-5 slider">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* service section */}
            <h1>Our Services</h1>
            <div className=" display container mb-5">

                {
                    materials.map(material => <Study 
                        key={material.key}
                        material={material} ></Study>)
                }
            </div>
        </div>
    );
};

export default Home;
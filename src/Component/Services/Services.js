import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./study.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>Our Services</h1>
                <div className=" display container mt-5 mb-5">

                    {
                        services.map(material => <Service 
                            key={material.key}
                            material={material}></Service>)
                    }
                </div>
            </div>
    );
};

export default Services;
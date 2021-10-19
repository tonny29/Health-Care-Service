import React, { useEffect, useState } from 'react';
import AboutDetail from '../AboutDetail/AboutDetail';


const Aboutus = () => {
    const [star,setStar]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setStar(data))
    },[])
    
    return (
        <div>
            {
                star.map(star=><AboutDetail starAdd={star}></AboutDetail>)
            }
        </div>
    );
};

export default Aboutus;
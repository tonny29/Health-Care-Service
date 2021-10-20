import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import fakedata from '../../../../Utilitize/fakedata';
import './Detail.css';

const Detail = () => {
    const {detailId}=useParams();
    const details=fakedata.find(data=>data.id===parseInt(detailId));
    return (
        <div className="detail-area btn-style">
            <h1>This is Detail Id : {detailId}</h1>
            <img src={details.image} alt="" />
            <h2>Name Of Service : {details.name}</h2>
              <p>{details.description}</p>
              <h4>Minimun-Cost : ${details.cost}</h4>
              <Link to="/home"><button>Go Back</button></Link>
        </div>
    );
};

export default Detail;
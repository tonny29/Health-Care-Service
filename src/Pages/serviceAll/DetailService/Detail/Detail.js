import React from 'react';
import { useParams } from 'react-router';
import fakedata from '../../../../Utilitize/fakedata';
const Detail = () => {
    const {detailId}=useParams();
    const details=fakedata.find(data=>console.log(typeof data.id))
    return (
        <div>
            <h1>This is Detail Id : {detailId}</h1>
        </div>
    );
};

export default Detail;
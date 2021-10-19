import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {detailId}=useParams();
    return (
        <div>
            <h1>This is Detail Id : {detailId}</h1>
        </div>
    );
};

export default Detail;
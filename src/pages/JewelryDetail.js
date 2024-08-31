import React from 'react';
import { useParams } from 'react-router-dom';

function JewelryDetail({ items }) {
    const { id } = useParams();
    const item = items.find(item => item.id === parseInt(id));

    if (!item) return <h2>Jewelry not found!</h2>;

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
}

export default JewelryDetail;

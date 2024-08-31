import React from 'react';

function JewelryItem({ item }) {
    return (
        <div className="jewelry-item alignleft">
            <img src={item.imageUrl} alt={item.name} className="aligncenter" />
            <h3 className="mt-30">{item.name}</h3>
            <p>{item.description}</p>
            <p className="price pb-30">${item.price}</p>
        </div>
    );
}

export default JewelryItem;

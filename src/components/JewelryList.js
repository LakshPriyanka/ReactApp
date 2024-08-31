import React from 'react';
import JewelryItem from './JewelryItem';

function JewelryList({ items }) {
    return (
        <div>
            {items.map(item => (
                <JewelryItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default JewelryList;

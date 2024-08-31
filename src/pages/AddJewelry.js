import React, { useState } from 'react';

function AddJewelry({ addJewelryItem }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Store the selected image file
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a URL for the image to display it
        const imageUrl = URL.createObjectURL(image);

        addJewelryItem({ 
            id: Date.now(), 
            name, 
            description, 
            price, 
            imageUrl 
        });

        setName('');
        setDescription('');
        setPrice('');
        setImage(null); // Reset image state after submission
    };

    return (
        <div>
            <h1>Add New Jewelry</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <input 
                    type="file" 
                    onChange={handleImageChange} 
                    accept="image/*" 
                />
                <button type="submit">Add Jewelry</button>
            </form>
        </div>
    );
}

export default AddJewelry;

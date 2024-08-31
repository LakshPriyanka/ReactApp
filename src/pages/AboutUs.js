import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <br></br>
            <img src={'https://www.calitiger.com/cdn/shop/files/DESKTOP_HERO_IMAGE_e7bb1230-e95a-42f2-b7a2-ead6068a1b21.jpg?crop=center&height=1200&v=1719245090&width=1200'} alt="Jewelry" className="about-us-image" />
            <br></br>
            <br></br>
            <div className="about-us-content">
               
                <div className="about-us-text">
                    <p>
                        Welcome to our jewelry store! We are passionate about crafting
                        unique and elegant jewelry pieces that reflect the beauty and
                        individuality of our customers.
                    </p>
                    <p>
                        Our journey began with a simple desire to create timeless
                        accessories that bring joy and confidence to those who wear
                        them. Every piece of jewelry we offer is designed with
                        meticulous attention to detail and a deep appreciation for
                        quality craftsmanship.
                    </p>
                    <p>
                        Whether you're looking for a special gift or a personal
                        treasure, we are here to help you find the perfect piece that
                        resonates with your style and personality. Thank you for
                        choosing us as your trusted jewelry source.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

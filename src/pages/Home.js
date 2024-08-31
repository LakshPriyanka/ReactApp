import React, { useState } from 'react';
import JewelryList from '../components/JewelryList';
import { Carousel } from 'react-bootstrap';

function Home({ jewelryItems }) {
    return (
        <div>
            <br></br>
            <br></br>
            <h1>Jewelry Collection</h1>
            <br></br>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dajdiamond.com/wp-content/uploads/2022/07/Black-Wedding-Jewelry-Landscape-Banner-1024x512.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dia-Jewel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.blushandco.com.au/cdn/shop/files/timeless2_1920_x_900_px_370bb718-7461-4010-bb90-b947193877ac.png?v=1698898164&width=3840"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>A new enjoyment</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.dishisjewels.com/image/cache/catalog/home-slide/bespoke-design-mob-788x417.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Spreading happiness</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br><br></br>
            <JewelryList items={jewelryItems} />
        </div>
    );
}

export default Home;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JewelryDetail from './pages/JewelryDetail';
import AddJewelry from './pages/AddJewelry';
import AboutUs from './pages/AboutUs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [jewelryItems, setJewelryItems] = useState([
      { id: 1, name: 'Gold Necklace', description: '24k Gold Necklace', price: 299, imageUrl: 'https://5.imimg.com/data5/EK/HU/BF/SELLER-45272018/bridal-gold-necklace.jpg' },
      { id: 2, name: 'Diamond Ring', description: 'Diamond Ring with 0.5ct stone', price: 999, imageUrl: 'https://images-cdn.ubuy.co.in/66b0c144d5b1314a6567db95-women-s-18-k-rose-gold-micro-inlaid.jpg' },
      { id: 3, name: 'Diamond Earring', description: 'Diamond Earring with 0.5ct stone', price: 599, imageUrl: 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/1118/1660918211_941289e3eaefa3afeae3.png' },
    ]);

  const addJewelryItem = (newItem) => {
      setJewelryItems([...jewelryItems, newItem]);
  };

  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home jewelryItems={jewelryItems} />} />
              <Route path="/add" element={<AddJewelry addJewelryItem={addJewelryItem} />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/detail/:id" element={<JewelryDetail jewelryItems={jewelryItems} />} />
          </Routes>
      </Router>
  );
}

export default App;

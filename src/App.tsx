import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import nike1 from './assets/nike_shoe_1.png';
import nike2 from './assets/nike_shoe_2.png';
import nike3 from './assets/nike_shoe_3.png';
import ShoeComponent from './shoe_component/shoe';

function App() {
  const [popup, setPopup] = useState(false);
  return (
    <div className="container">
      {/* <div className="product">
        <div className="product-card">
          <h2 className="name">Nike Shoe</h2>
          <span className="price">$120.00</span>
          <a className="popup-btn" onClick={() => setPopup(true)}>Quick View</a>
          <img src={nike} className="product-img" alt="" />
        </div>
        <div className={ 'popup-view ' + (popup === true ? 'active': null)}>
          <div className="popup-card">
            <a onClick={() => setPopup(false)}><i className="fas fa-times close-btn"></i></a>
            <div className="product-img">
              <img src={nike} alt="" />
            </div>
            <div className="info">
              <h2>Nike Shoe<br /><span>Men's Sport</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span className="price">$120.00</span>
              <a href="#" className="add-cart-btn">Add to Cart</a>
              <a href="#" className="add-wish">Add to Wishlist</a>
            </div>
          </div>
        </div>
      </div> */}
      <ShoeComponent pic={nike1} price={'12,000 FCFA'} />
      {/* <ShoeComponent pic={nike2} /> */}
      <ShoeComponent pic={nike3} price={'8,000 FCFA'} />
    </div>
  );
}

export default App;

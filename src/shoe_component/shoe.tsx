import React, { useState } from 'react';
import '../App.scss';

const ShoeComponent = (props: any) => {
    const [popup, setPopup] = useState(false);
    return (
        <div className="product">
        <div className="product-card">
          <h2 className="name">Nike Shoe</h2>
          <span className="price">{props.price}</span>
          <a className="popup-btn" onClick={() => setPopup(true)}>Quick View</a>
          <img src={props.pic} className="product-img" alt="" />
        </div>
        <div className={ 'popup-view ' + (popup === true ? 'active': null)}>
          <div className="popup-card">
            <a onClick={() => setPopup(false)}><i className="fas fa-times close-btn"></i></a>
            <div className="product-img">
              <img src={props.pic} alt="" />
            </div>
            <div className="info">
              <h2>Nike Shoe<br /><span>Men's Sport</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span className="price">{props.price}</span>
              <a href="#" className="add-cart-btn">Add to Cart</a>
              <a href="#" className="add-wish">Add to Wishlist</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ShoeComponent;
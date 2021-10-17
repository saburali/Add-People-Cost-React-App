import React from 'react';
import './cart.css';

const Cart = () => {
    return (
        <div className="cart">
            <div className="card">
                <h2 className="themeLetter" style={{marginTop: '0'}}> Speaker Cart </h2>
                <div className="cart-container">
                    <div className="property">
                        <h4 className="themeLetter"> Speaker : </h4>
                        <p className="themeLetter"> Total Cost : </p>
                    </div>
                    <div className="value">
                        <h4> 2 </h4>
                        <p> $868.88 </p>
                    </div>
                </div>
                <div className="person">
                    <p> 1. Jiyaur Rahman </p>
                    <p> 2. Jiyaur Rahman </p>
                    <p> 3. Jiyaur Rahman </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
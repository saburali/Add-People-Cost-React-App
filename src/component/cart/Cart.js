import React from 'react';
import './cart.css';
import {FaDollarSign, FaUser} from "react-icons/all";

const Cart = (props) => {

    // Destructuring Cart 
    const { cart } = props;

    // Using Reduce For Cart Calculation
    const totalReducer = (preValue, currentValue) => preValue + currentValue.Salary;
    const finalTotal = cart.reduce(totalReducer, 0);
    const total = parseFloat(finalTotal);

    // FontAwesome icon Declare
    const user = <FaUser style={{fontSize: '16px'}}/>;
    const dollarSign = <FaDollarSign style={{fontSize: '18px', marginBottom: '-2px'}}/>;
    
    return (
        <div className="cart">
            <div className="card">
                <h2 className="themeLetter" style={{marginTop: '0'}}> Speaker Cart </h2>
                <div className="cart-container">
                    <div className="property">
                        <h4 className="themeLetter"> {user} Speaker : </h4>
                        <p className="themeLetter"> {dollarSign} Total Cost : </p>
                    </div>
                    <div className="value">
                        <h4> {cart.length} </h4>
                        <p> {dollarSign}{total} </p>
                    </div>
                </div>
                <div className="person">
                    <p> {user} Speaker Name - </p>

                    <ol type="1">
                        {cart.map((speaker) => (
                            <li>{speaker.name}</li>
                        ))}
                    </ol>

                    {/*<p> 1. Jiyaur Rahman </p>*/}
                    {/*<p> 2. Jiyaur Rahman </p>*/}
                    {/*<p> 3. Jiyaur Rahman </p>*/}
                </div>
            </div>
        </div>
    );
};

export default Cart;
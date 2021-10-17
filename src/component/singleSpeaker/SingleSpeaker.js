import React from 'react';
import './singleSpeaker.css';
import {AiOutlineShoppingCart} from "react-icons/all";

const SingleSpeaker = (props) => {

    // Destructuring Person
    const { age, name, position, email, gender, phone, birthday, Salary, address, photo } = props.speaker;

    return (
        <div className="card mb-4">
            <div className="img-container">
                <img src={photo} className="" alt=""/>
            </div>
            <div className="card-body">
                <p className="mb-1 position" title="">
                    Position:
                    <span className="themeLetter"> {position} </span>
                </p>
                <h5 className="card-title themeLetter" title={name}> {name} </h5>
                <div className="contact">

                    <div className="props">
                        <h5 className="themeLetter card-contact"> Birthday -  </h5>
                        <h5 className="themeLetter card-contact"> Phone -  </h5>
                        <h5 className="themeLetter card-contact"> Address -  </h5>
                        <h5 className="themeLetter card-contact"> Email -  </h5>
                    </div>
                    <div>
                        <h5 className="card-contact themeLetter" title={birthday}> {birthday} </h5>
                        <h5 className="card-contact themeLetter" title={phone}> {phone} </h5>
                        <h5 className="card-contact themeLetter" title={address}> {address} </h5>
                        <h5 className="card-contact themeLetter" title={email}> {email} </h5>
                    </div>
                </div>
                <div className="media">
                    <h2 className="align-self-center mr-3 price" title=""> $65446 </h2>
                    <div className="media-body">
                        <div style={{width: '90px', textAlign: 'left'}}>
                            <p className="themeLetter" title="Sex"> {gender} </p>
                            <p className="themeLetter" style={{marginBottom: '0'}} title="Age"> Age: {age} </p>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn" onClick={() => props.handleCart(props.speaker)}>
                    <AiOutlineShoppingCart className="icon" />
                    <span> Add to cart </span>
                </button>
            </div>
        </div>
    );
};

export default SingleSpeaker;
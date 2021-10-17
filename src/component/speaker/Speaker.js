import React, {useEffect, useState} from 'react';
import './speaker.css';
import {AiOutlineShoppingCart} from "react-icons/all";
import SingleSpeaker from "../singleSpeaker/SingleSpeaker";

const Speaker = () => {

    //   JSON API CALL
    const [speaker, setSpeaker] = useState([]);
    useEffect(() => {
        fetch("./fakeUserData.json")
            .then((res) => res.json())
            .then((data) => setSpeaker(data));
    }, []);

    //   Manage Cart
    const [cart, setCart] = useState([]);
    const handleCart = (speaker) => {
        const newCart = [...cart, speaker];
        setCart(newCart);
    };

    return (
        <div className="speakers">
            {speaker.map((speaker) => (
                <SingleSpeakern
                    person={speaker}
                    handleCart={handleCart}
                    key={speaker.key}
                >
                </SingleSpeakern>
            ))}
        </div>
    );
};

export default Speaker;
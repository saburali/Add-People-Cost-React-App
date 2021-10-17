import React, {useEffect, useState} from 'react';
import './speaker.css';
import SingleSpeaker from "../singleSpeaker/SingleSpeaker";
import Cart from "../cart/Cart";

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
        <div className="app-container">
            <div className="speakers">
                {speaker.map((speaker) => (
                    <SingleSpeaker
                        speaker={speaker}
                        handleCart={handleCart}
                        key={speaker.key}
                    >
                    </SingleSpeaker>
                ))}
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Speaker;
import React from 'react';
import './GymItem.css'

const GymItem = ({ eventHandler, data }) => {
    const { image, name, time } = data;
    console.log(data)
    console.log(name)
    return (
        <div>
            <div className='cart-container'>
                <img src={image} alt="" />
                <div className='details-div'>
                    <h3>Exercise Name: {name}</h3>
                    <p>Time required: {time} Minutes</p>
                </div>
                <button onClick={() => eventHandler(time)}>Start Excercise</button>
            </div>
        </div>
    );
};

export default GymItem;
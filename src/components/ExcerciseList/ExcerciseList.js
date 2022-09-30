import './ExcerciseList.css'
import React, { useEffect, useState } from 'react';
import GymItem from '../GymItem/GymItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import Summary from '../Summary/Summary';




const ExcerciseList = () => {
    const [datas, setDatas] = useState([])
    const [times, setTimes] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, []);
    const addedTime = (props) => {
        const time = [...times, props];
        setTimes(time)
    }
    return (
        <div className='container-div'>
            <div className='products-side'>
                <h1 className='products-headding'><FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon> Total Body Gym</h1>
                <h3 className='product-side-h3'>Select Your Exercise  </h3>
                <div className='products-container'>
                    {
                        datas.map(data => <GymItem
                            key={data.id}
                            eventHandler={addedTime}
                            data={data}
                        ></GymItem>)
                    }
                </div>
            </div>
            <div className='summary-side'>
                <Summary times={times}></Summary>
            </div>
        </div >
    );
};

export default ExcerciseList;
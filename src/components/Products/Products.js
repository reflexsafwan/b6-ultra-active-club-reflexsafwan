import './Products.css'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';




const Products = () => {
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
                {/* <h1 className='products-headding'><FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon> Total Body Gym</h1> */}
                <h3 className='product-side-h3'>Select Your Exercise  </h3>
                <div className='products-container'>
                    {
                        datas.map(data => <Cart
                            key={data.id}
                            eventHandler={addedTime}
                            data={data}
                        ></Cart>)
                    }
                </div>
            </div>
            {/* <div className='summary-side'>
                <SummaryCart times={times}></SummaryCart>
            </div> */}
        </div >
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage } from '../../localstorage';
import './Summary.css'

const Summary = ({ times }) => {
    const [breakTimes, SetBreakTimes] = useState(0);

    useEffect(() => {
        let getValueFromStorage = localStorage.getItem('breakTime')
        getValueFromStorage = getValueFromStorage ? getValueFromStorage : 0;
        SetBreakTimes(getValueFromStorage);
    }, [])

    let totalExerciseTime = 0;
    for (const time of times) {
        totalExerciseTime = totalExerciseTime + time;
    }

    const breakTime = (props) => {
        addToLocalStorage(props);
        SetBreakTimes(props)
    };

    const showToast = () => {
        toast('Activity Completed', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,


        });
    };

    return (
        <div className='summary-cart-container'>
            <div className='personal-details'>
                <img src="https://images.unsplash.com/photo-1561313021-9c964ccfc7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80" alt="" />
                <div>
                    <h4>Md.Safwan</h4>
                    <p>Laksham,cumilla</p>
                </div>
            </div>
            <div className='height-weight-age-section'>
                <div>
                    <h4>70 <small className='kg'>kg</small></h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.7 ft</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>25 <small>yrs</small></h4>
                    <p>Age</p>
                </div>
            </div>
            <div className='break-section'>
                <h2>Add A Break</h2>
                <div className='break-section-btn'>
                    <button onClick={() => breakTime(1)}>1m</button>
                    <button onClick={() => breakTime(2)}>2m</button>
                    <button onClick={() => breakTime(3)}>3m</button>
                    <button onClick={() => breakTime(4)}>4m</button>
                    <button onClick={() => breakTime(5)}>5m</button>
                </div>
            </div>
            <div className='exercise-details-container'>
                <h3>Exercise Details</h3>
                <div className='exercise-details'>
                    <h4>Exercise time</h4>
                    <p>{totalExerciseTime} minuties</p>
                </div>
                <div className='exercise-details'>
                    <h4>Break time</h4>
                    <p>{breakTimes} minutes</p>
                </div>
            </div>
            <button onClick={showToast} className='activity-btn'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Summary;
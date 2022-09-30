import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions-Container'>
            <h3>1. How does react work?</h3>
            <p>React is a JavaScript library for building user interfaces. It is a component based library. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries</p>

            <h3>2. what is difference between props and state?</h3>
            <p>Props  are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props. The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events. A Component manages its own state internally. Besides setting an initial state, it has no business fiddling with the state of its children. You might conceptualize state as private to that component..</p>

            <h3>3.What are the use cases of useEffect?</h3>
            <p><strong> 6 use cases of the useEffect ReactJS hook</strong>
                Running once on mount: fetch API data
                Running on state change: validating input field
                Running on state change: live filtering
                Running on state change: trigger animation on new array value
                Running on props change: update paragraph list on fetched API data update
                Running on props change: updating fetched API data to get BTC updated price
            </p>
        </div>
    );
};

export default Questions;
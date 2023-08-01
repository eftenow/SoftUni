import React, { useState } from 'react';


const Counter = (props) => {
    const [count, setCount] = useState(props.count);

    function incrementHandler() {
        setCount(prevCount => prevCount + 1)
    };
    
    function decrementHandler() {
        setCount(prevCount => prevCount - 1)
    }

    return(
        <div>
            <h2>Counter</h2>
            {count < 10
            ? <button onClick={incrementHandler}>+</button> : ''}
            {count}
            {count >= 1
            ? <button onClick={decrementHandler}>-</button>
            : ''}
            
        </div>
    )
}

export default Counter;
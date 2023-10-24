import { useState } from "react";

export const Button = () => {
    const [number, setNumber] = useState(0);

    const incrementHandler = (e) => {
        setNumber(() => number + 1)
    }

    const decrementHandler = (e) => {
        setNumber(() => number - 1)
    }

    const clearHandler = (e) =>{
        setNumber(0)
    }

    let numberRange;

    if(number < 0){
    numberRange = 'Below 0.'} else if (number >= 0 && number < 10) {
        numberRange = 'between 0 and 10';
      } else if (number >= 10 && number <= 20) {
        numberRange = 'between 10 and 20';
      } else {
        numberRange = 'Above 20.'
      }

    return(
        <>
        <h2>Current number is: {numberRange}</h2>
        <button onClick={decrementHandler}>-</button>
        <span>Value: {number}</span>
        <button onClick={incrementHandler}>+</button>
        <button onClick={clearHandler}>Clear</button>
        </>

    )
}
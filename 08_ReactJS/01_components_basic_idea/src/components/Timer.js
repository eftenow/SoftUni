import { useState, useEffect } from "react";

const Timer = (props) => {
    const [seconds, setTime] = useState(props.start);
    const [isActive, setIsActive] = useState(false);
    let intervalId = null;

    useEffect(() => {
        if (isActive) {
            intervalId = setInterval(() => {
                setTime(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isActive]);

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setTime(props.start);
        setIsActive(false);
    }

    return(
        <div>
            <h2>Timer: {seconds}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer;

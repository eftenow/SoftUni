import { useState, useEffect } from 'react';

export const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.seconds || 0);
    const [minutes, setMinutes] = useState(props.minutes || 0);
    const [hours, setHours] = useState(props.hours || 0);

    useEffect(() => {
        const timerInterval = setInterval(() => {
          if (seconds < 59) {
            setSeconds((currentSeconds) => currentSeconds + 1);
          } else if (minutes < 59) {
            setSeconds(0);
            setMinutes((currentMinutes) => currentMinutes + 1);
          } else {
            setSeconds(0);
            setMinutes(0);
            setHours((currentHours) => currentHours + 1);
          }
        }, 1000);
    
        return () => clearInterval(timerInterval);
      }, [seconds, minutes, hours]);

    return (
        <>
            <h2>Timer:</h2>
            <div>Hours: {hours}</div>
            <div>Minutes: {minutes}</div>
            <div>Seconds: {seconds}</div>
        </>
    )
}
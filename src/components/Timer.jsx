import React, { useEffect, useState } from 'react';

const Timer = ({ totalTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(interval);
      onTimeUp();
      alert('Time is up. Quiz will be submitted automatically.');
    }

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  // Convert time from seconds to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center flex items-center ">
      <div className="text-white text-2xl font-semibold">
        <span className='text-white/50 text-sm mr-3'>Time Left </span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span className="mx-1">:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      {/* <div className="text-sm">
        <span>Minutes</span>
        <span className="mx-1">:</span>
        <span>Seconds</span>
      </div> */}
    </div>
  );
};

export default Timer;

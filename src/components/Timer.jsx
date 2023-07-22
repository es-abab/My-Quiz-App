import React, { useEffect, useState } from 'react';

const Timer = ({ totalSeconds }) => {
  const [time, setTime] = useState({
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  });

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((prevTime) => {
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 0;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const padNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="text-center">
      <span className="text-xl font-semibold">
        {padNumber(time.hours)}:{padNumber(time.minutes)}:{padNumber(time.seconds)}
      </span>
    </div>
  );
};

export default Timer;

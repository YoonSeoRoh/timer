import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const setTimer = (num, length) => {
  return String(num).padStart(length, "0");
};

const Timer = () => {
  const [hour, setHour] = useState(setTimer(0, 2));
  const [min, setMin] = useState(setTimer(5, 2));
  const [sec, setSec] = useState(setTimer(0, 2));

  const timeRef = useRef(300);
  const intervalRef = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      timeRef.current -= 1;
      setHour(setTimer(timeRef / 60 / 60, 2));
      setMin(setTimer(timeRef / 60, 2));
      setSec(setTimer(timeRef % 60, 2));
    });
    return () => clearInterval(intervalRef.current);
  });

  useEffect(() => {
    if (sec <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [sec]);
  return (
    <div className="timer">
      <h2>HURRY UP!</h2>
      <h1>
        {hour} : {min} : {sec}
      </h1>
    </div>
  );
};

export default Timer;

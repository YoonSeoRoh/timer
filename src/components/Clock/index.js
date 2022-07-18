import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const setClock = (num, length) => {
  return String(num).padStart(length, "0");
};

const Clock = () => {
  const date = new Date();
  const [hour, setHour] = useState(setClock(date.getHours(), 2));
  const [min, setMin] = useState(setClock(date.getMinutes(), 2));
  const [sec, setSec] = useState(setClock(date.getSeconds(), 2));

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = new Date();
      setHour(setClock(now.getHours(), 2));
      setMin(setClock(now.getMinutes(), 2));
      setSec(setClock(now.getSeconds(), 2));
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div className="clock">
      <h1 className="title">THE TIME IS ...&#9200;</h1>
      <h2 className="clock">
        {hour} : {min} : {sec}
      </h2>
    </div>
  );
};

export default Clock;

import React, { useState, useEffect } from "react";
import "./Countdown.css"

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const mont = month[d.getMonth()+1] 
  const dat = d.getDate();
  const year = d.getFullYear();
  //const deadline = "June, 31, 2023";
  const deadline = `${mont}, ${dat}, ${year}`;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSecs(Math.floor((time / 1000) % 60));
    console.log(time);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Countdown">
      <h1 className="time">{hours}:{mins}:{secs}</h1>
      <p className="left">left</p>
      <p className="prep">Preparation Time</p>
      <i class="fa-regular fa-clock clock-icon"></i>

    </div>
  );
};

export default Countdown;

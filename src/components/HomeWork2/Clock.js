import { useState, useEffect } from "react";
import "./Card.css";


function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h3>Поточний час</h3>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default Clock;

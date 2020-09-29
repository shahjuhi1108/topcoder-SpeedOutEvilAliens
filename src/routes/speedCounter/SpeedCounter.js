import React, { useState } from 'react';

function precise(x) {
  return Number(x.toPrecision(4));
}

export default function SpeedCounter() {
  const [speed, setSpeed] = useState(0);

  return (
    <div>
      <div>
        <h1>Speed Counter</h1>
        <p>Current speed: {speed}</p>
        <button
          onClick={() => setSpeed(precise(Math.min(2, speed + 0.1)))}
          type="button"
        >
          Increase Speed
        </button>
        <button
          onClick={() => setSpeed(precise(Math.max(0, speed - 0.1)))}
          type="button"
        >
          Decrease Speed
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Room.css";

function Room(props) {
  let [isLit, setLit] = useState(true);
  let [temp, setTemp] = useState(72);

  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <h1>Welcome to My Room</h1>
      <h1>This is second assignment of ReactJS classes</h1>
      <div>Press ON/OFF button to swtich on and off the Room' Light.</div>
      <div>
        Use '+' and '-' button to increase or decrease the Room's Temperature
      </div>
      <br />
      <p>
        Crrent Light Status is: {isLit ? "Lights are ON" : "Lights are OFF"}
      </p>
      <p>Crrent Room Temperature is: {temp}</p>
      <br />
      <p>
        Toggle Light:
        <button
          className="btnClass"
          onClick={() => {
            if (isLit) {
              alert("Light is Already ON");
            } else {
              setLit(true);
            }
          }}
        >
          Switch ON
        </button>
        <button
          className="btnClass"
          onClick={() => {
            if (!isLit) {
              alert("Light is Already OFF");
            } else {
              setLit(false);
            }
          }}
        >
          Switch OFF
        </button>
      </p>

      <p>
        Increase/Decrease Temperature:
        <button className="btnClass" onClick={() => setTemp(++temp)}>
          +
        </button>
        <button className="btnClass" onClick={() => setTemp(--temp)}>
          -
        </button>
      </p>
    </div>
  );
}

export default Room;

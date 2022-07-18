import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const setClock = (num, length) => {
  return String(num).padStart(length, "0");
};

const Setter = () => {
  return (
    <div className="setter">
      <div className="inputBlock">
        <input></input> H<input></input> M<input></input> S
      </div>
      <div className="btnBlock">
        <button>RUN</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default Setter;

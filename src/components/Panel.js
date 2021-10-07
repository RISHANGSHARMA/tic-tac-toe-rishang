import React from "react";
import Boxes from "./Boxes";

const Panel = ({ squares, onClick }) => (
  <div className="Panel">
    {squares.map((boxes, i) => (
      <Boxes key={i} value={boxes} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Panel;

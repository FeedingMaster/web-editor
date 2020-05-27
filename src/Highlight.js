import React from "react";

const Highlight = ({ currentElement }) => {
  let style;
  let name;
  if (currentElement) {
    let pos = currentElement.getBoundingClientRect();
    name = currentElement.getAttribute("data-name");
    style = {
      width: currentElement.offsetWidth - 2 + "px",
      height: currentElement.offsetHeight - 1 + "px",
      top: pos.top + "px",
      left: pos.left + "px",
      pointerEvents: "none",
      display: "block",
      position: "absolute",
      border: "1px solid #1b8ef7"
    };
  } else {
    style = { display: "none" };
  }

  return (
    <div style={style} className="Highlight">
      <div className="highlight-name">{name}</div>
    </div>
  );
};

export default Highlight;

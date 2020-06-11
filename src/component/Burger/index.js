import React from "react";

import "./style.scss";

const burger = (props) => {
  return (
    <div className="burger-container" onClick={props.change}>
      {/* <div></div> */}
      <div className="line one"></div>
      <div className="line short"></div>
      <div className="line two"></div>
    </div>
  );
};

export default burger;

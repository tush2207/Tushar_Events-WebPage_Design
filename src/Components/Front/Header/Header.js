import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="head">
      

        <img className="image" src="./img/event.png" />
        <h1 className="title">
          <img src="./img/tu.png" width="60px" />
          Tushar Event's
          <img src="./img/tu2.png" width="60px" />
        </h1>
        <h1>
          Memorable events don't just happen. They happen to be our business.
        </h1>
      </div>
    </>
  );
}

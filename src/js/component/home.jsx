import React, { useState } from "react";

const Home = () => {
  const [RedBtn, setRedBtn] = useState("bg-danger opacity-50");
  const [YellowBtn, setYellowBtn] = useState("bg-warning opacity-50");
  const [GreenBtn, setGreenBtn] = useState("bg-success opacity-50");

  const changeColor = (color) => {
    setRedBtn("bg-danger opacity-50");
    setYellowBtn("bg-warning opacity-50");
    setGreenBtn("bg-success opacity-50");

    switch (color) {
      case "red":
        setRedBtn("bg-danger");
        break;
      case "yellow":
        setYellowBtn("bg-warning");
        break;
      case "green":
        setGreenBtn("bg-success");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="cable bg-dark">a</div>
      <div className="container bg-dark col-1 rounded-4 p-4 d-flex flex-column align-items-center">
          <div className={" circle m-2 bg " + RedBtn} onClick={() => changeColor("red")}></div>
          <div className={" circle m-2 bg " + YellowBtn} onClick={() => changeColor("yellow")}></div>
          <div className={" circle m-2 bg " + GreenBtn} onClick={() => changeColor("green")}></div>
      </div>
    </div>
    
  );
};

export default Home;
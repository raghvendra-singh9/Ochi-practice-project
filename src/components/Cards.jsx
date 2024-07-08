import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

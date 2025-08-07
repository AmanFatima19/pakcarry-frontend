import React from "react";
import CountUp from "react-countup";

function Counter() {
  return (
    <div className="py-10">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center text-center py-12 gap-10 md:gap-16">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <h2
            className="border-b-2 pb-4 md:text-3xl font-semibold"
            style={{
              color: "#0ac6ae",
              borderColor: "#0ac6ae",
              fontSize: "35px",
            }}
          >
            <CountUp start={0} end={2} duration={1} /> years
          </h2>
          <p className="text-gray-600 pt-2 text-sm sm:text-base">
            We have been working for you since 2023
          </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <h2
            className="border-b-2 pb-4 md:text-3xl font-semibold"
            style={{
              color: "#0ac6ae",
              borderColor: "#0ac6ae",
              fontSize: "35px",
            }}
          >
            <CountUp start={0} end={1012} duration={2.5} />
          </h2>
          <p className="text-gray-600 pt-2 text-sm sm:text-base">
            Customers satisfied with the service
          </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <h2
            className="border-b-2 pb-4 md:text-3xl font-semibold"
            style={{
              color: "#0ac6ae",
              borderColor: "#0ac6ae",
              fontSize: "35px",
            }}
          >
            <CountUp start={0} end={102} duration={3} />
          </h2>
          <p className="text-gray-600 pt-2 text-sm sm:text-base">
            Countries covered with our service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;

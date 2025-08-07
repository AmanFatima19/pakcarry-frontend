import React from "react";

function CostEfficiencySection() {
  return (
    <section className="container mx-auto px-6 py-26 flex flex-col md:flex-row items-center">
      <div className="md:w-[41%] w-full">
        <img
          src="Luggage-less.jpg"
          alt="Luggage"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      <div className="md:w-[58%] w-full md:pl-10 md:mt-0">
        <h3
          className="font-bold uppercase text-sm"
          style={{ color: "#0ac6ae" }}
        >
          Send More by Spending Less
        </h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Cost-Efficiency
        </h2>
        <p className="text-gray-700 mt-4 text-lg" style={{ fontSize: "16px" }}>
          Say goodbye to expensive shipping fees. PakCarry offers a
          cost-efficient solution for sending packages. Our platform connects
          senders with travelers willing to deliver at lower costs, ensuring
          affordability and convenience.
        </p>
      </div>
    </section>
  );
}

export default CostEfficiencySection;

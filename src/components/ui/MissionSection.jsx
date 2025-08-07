import React from "react";

const MissionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto pt-26 pb-6 px-6">
      <div className="w-full md:w-1/2">
        <img src="mission.jpg" alt="Traveler" className="w-full rounded-lg " />
      </div>

      <div className="w-full md:w-1/2 md:pl-12 text-left mt-8 md:mt-0">
        <p
          className="text-lg font-semibold uppercase"
          style={{ color: "#0ac6ae" }}
        >
          Our Mission
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Bridging The Gap</h2>
        <p className="text-gray-600 mt-4">
          PakCarry strives to redefine the travel experience by bridging the gap
          between travelers and luggage senders through an innovative platform.
          Our goal is to create a connected community that transforms the way
          people travel in Pakistan.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;

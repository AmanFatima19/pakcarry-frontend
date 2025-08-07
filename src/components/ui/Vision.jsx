import React from "react";

function Vision() {
  return (
    <section className="relative bg-black text-white py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/background-image.jpg')" }}
      ></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <p
          className="text-lg font-semibold uppercase"
          style={{ color: "#0ac6ae" }}
        >
          Our Vision
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          A Smarter, More Efficient Travel Experience
        </h2>
        <p className="text-gray-300 mt-4">
          PakCarry was born out of a vision to make travel smarter, more
          efficient, and cost-effective. We leverage cutting-edge technology to
          create a secure and transparent platform, ensuring a seamless
          experience for both senders and travelers.
        </p>
      </div>
    </section>
  );
}

export default Vision;

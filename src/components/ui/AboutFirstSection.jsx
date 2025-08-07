import React from "react";

function AboutFirstSection() {
  return (
    <div className="relative top-24">
      <div
        className="w-[100%] h-[70vh] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto px-6">
          <h3 style={{ fontSize: "23px" }}>
            Revolutionizing package delivery through a secure, traveler-powered
            logistics network.
          </h3>
          <h1 className="text-5xl font-bold mt-3">About PakCarry</h1>
        </div>
      </div>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Revolutionizing Package Delivery in Pakistan
        </h2>
        <p className="text-md text-gray-700 mt-2">
          PakCarry is revolutionizing package delivery in Pakistan by leveraging
          a peer-to-peer network of verified travelers. Our platform ensures
          secure, reliable, and efficient logistics, making shipping more
          accessible and affordable. With real-time tracking and seamless
          transactions, we bridge the gap between senders and travelers,
          redefining the way parcels are delivered.
        </p>
      </section>
    </div>
  );
}

export default AboutFirstSection;

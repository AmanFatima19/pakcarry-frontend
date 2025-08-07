import React from "react";

const SwiftDeliverySection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-26">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <p
            className="text-lg font-semibold uppercase"
            style={{ color: "#0ac6ae" }}
          >
            Your Time Matters
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Swift & Timely Delivery
          </h2>
          <p className="text-gray-600 mt-4 pr-2">
            We understand the importance of timely delivery. PakCarry connects
            you with travelers who are ready to send your packages swiftly and
            reliably. No more waiting for traditional shipping methods –
            experience fast and convenient delivery with PakCarry.
          </p>
        </div>

        <div>
          <img
            src="swift-delivery.jpg"
            alt="Delivery Service"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SwiftDeliverySection;

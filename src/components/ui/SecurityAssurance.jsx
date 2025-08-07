import React from "react";

function SecurityAssurance() {
  return (
    <section className="bg-[#0ac6ae] text-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Heading Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            "Ensuring Safe, Secure, and Hassle-Free Deliveries"
          </h2>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8 border-l-4 border-white">
          <p className="text-lg text-white pl-1">
            PakCarry provides secure and insured package delivery, ensuring your
            parcels are protected throughout their journey. With verified
            travelers and dedicated support, we minimize risks and maximize
            reliability. Your trust is our priority—experience worry-free
            deliveries with PakCarry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecurityAssurance;

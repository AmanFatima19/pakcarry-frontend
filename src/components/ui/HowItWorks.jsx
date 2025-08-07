import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { FaUser, FaShippingFast, FaBox } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="flex flex-col items-center text-center py-20  bg-white">
      <h2
        className="text-4xl text-center mt-6"
        style={{ fontWeight: "700", marginBottom: "60px" }}
      >
        How It Works?
      </h2>

      <div className="flex flex-wrap justify-center items-start w-full max-w-5xl gap-12">
        <div className="flex flex-col items-center w-1/3">
          <FaUser className="text-6xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold">Fellow-Traveller</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            He can deliver some parcels on his way. So he registers with
            PakCarry, sets his routes, and defines order conditions.
          </p>
        </div>

        <FaArrowRight
          className="hidden md:block text-3xl rotate-[60deg] text-[#0ac6ae]"
          style={{ marginTop: "200px" }}
        />
        <FaArrowRight
          className="hidden md:block text-3xl rotate-[110deg] rotate-180 text-[#0ac6ae]"
          style={{ marginTop: "200px" }}
        />

        <div className="flex flex-col items-center w-1/3">
          <FaUser className="text-6xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold">Client</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            The client wants to send a parcel or document. He registers with
            PakCarry and searches for a fellow-traveler.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/3 mt-10">
        <FaShippingFast className="text-6xl text-teal-500 mb-4" />
        <h3 className="text-xl font-semibold">PakCarry Service</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Accepts requests from clients and provides a list of verified
          fellow-travelers. Payments are secured until delivery is completed.
        </p>
      </div>
      <FaArrowDown className="text-3xl my-8 text-[#0ac6ae]" />
      <div className="flex flex-col items-center">
        <FaBox className="text-6xl text-teal-500 mb-4" />
        <h3 className="text-xl font-semibold">Letter, Parcel, or Luggage</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          The sender’s payment is secured and released after successful
          delivery.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;

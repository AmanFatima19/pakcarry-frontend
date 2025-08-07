import React from "react";
import { CheckCircle } from "lucide-react";

function Guarantees() {
  const guarantees = [
    {
      title: "SECURE TRANSACTION",
      description:
        "We ensure safe deals. The fellow-traveller will not receive payment until the parcel is delivered in a proper state.",
    },
    {
      title: "DATABASE OF VERIFIED FELLOW-TRAVELLERS",
      description:
        "All fellow-travellers are registered in our database after a thorough check of their documents, visas, and other things.",
    },
    {
      title: "NO PROBLEMS WITH CUSTOMS",
      description:
        "Our fellow-travellers cross borders on a regular basis and they have no problems when going through customs.",
    },
    {
      title: "RECEIPT AND GUARANTEE",
      description:
        "After payment, you will have a payment receipt from CloudPayments. To do this, you need to specify your e-mail.",
    },
    {
      title: "LAW COMPLIANCE",
      description:
        "No prohibited things delivery! Study the things illegal in a particular country to ensure safe delivery.",
    },
    {
      title: "MINIMUM RISKS",
      description:
        "We accompany the whole way of the parcel and stay in touch with the traveler, ensuring safe delivery.",
    },
  ];

  return (
    <section className="py-10 px-16 bg-white">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl text-center mt-0 md:mt-10 lg:mt-10"
          style={{ fontWeight: "700" }}
        >
          Guarantees
        </h2>
        <div className="grid md:grid-cols-2 gap-10 lg:mt-12 md:mt-12 mt-6">
          {guarantees.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-[#0ac6ae] w-10 h-8" />
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: "500" }}>
                  {item.title}
                </h3>
                <p
                  className="text-black-500 "
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Guarantees;

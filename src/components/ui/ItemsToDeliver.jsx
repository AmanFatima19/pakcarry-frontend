import React from "react";

const items = [
  { id: 1, title: "Documents", image: "documents.jpg" },
  { id: 2, title: "Light Parcels", image: "parcel.jpg" },
  { id: 3, title: "Luggage", image: "luggage.jpg" },
];

function ItemsToDeliver() {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-4xl text-center" style={{ fontWeight: "700" }}>
        Items To Deliver
      </h2>
      <p className="text-gray-600 mt-2" style={{ fontSize: "17px" }}>
        Send or receive parcels using our PakCarry service
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsToDeliver;

import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    feedback:
      "Loved the user-friendly interface and secure payments. Will definitely use again!",
    image: "img-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Brown",
    feedback:
      "Excellent service with reliable travelers. Felt secure throughout my delivery journey. The support team was responsive and solved my queries quickly.",
    image: "b-img1.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Sarah Williams",
    feedback:
      "PakCarry made my delivery super easy and fast. The process was smooth and reliable.",
    image: "img-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Bilal Abdullah",
    feedback:
      "Affordable and timely delivery without any hassle. The user-friendly interface made it easy to book and track my package. Highly impressed with the service.",
    image: "b-img2.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Anjali Roshi",
    feedback:
      "PakCarry made my delivery super easy and fast. The process was smooth and reliable. I was impressed by the real-time updates and the secure payment options.",
    image: "img-5.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Umer Robert",
    feedback:
      "Great experience! The support team was helpful and the service was top-notch.",
    image: "b-img6.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div>
      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className="text-4xl text-center mt-0 md:mt-10 lg:mt-10"
            style={{ fontWeight: "700" }}
          >
            What People Says About Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-[#0ac6ae] hover:scale-102 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#0ac6ae]"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                <div className="flex justify-center gap-1 text-[#0ac6ae]">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <Star key={index} className="w-5 h-5" />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

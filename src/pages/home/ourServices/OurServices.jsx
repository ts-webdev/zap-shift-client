import React from "react";
const services = [
  {
    id: 1,
    title: "Same-Day Delivery",
    description:
      "Fast and reliable delivery within the same day for urgent parcels.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Express Delivery",
    description: "Priority delivery service with the quickest turnaround time.",
    icon: "🚀",
  },
  {
    id: 3,
    title: "Standard Delivery",
    description: "Affordable delivery solution for non-urgent packages.",
    icon: "📦",
  },
  {
    id: 4,
    title: "Cash on Delivery (COD)",
    description:
      "Collect cash payments from customers and settle with merchants.",
    icon: "💰",
  },
  {
    id: 5,
    title: "Bulk Parcel Service",
    description: "Ideal for businesses sending high-volume shipments daily.",
    icon: "📦",
  },
  {
    id: 6,
    title: "International Shipping",
    description:
      "Reliable cross-border courier service to major global destinations.",
    icon: "🌍",
  },
];

const OurServices = () => {
  return (
    <section className=" max-w-7xl mx-auto px-5">
      <div className="bg-secondary p-28 rounded-2xl">
        <h2 className="text-4xl font-bold text-white text-center">
          Our Services
        </h2>
        <p className="text-center mt-4 text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        {/* cards container */}
        <div className="grid grid-cols-3 gap-7 mt-10">
          {services.map((service) => {
            return (
              <div key={service.id} className="bg-white hover:bg-[#CAEB66] rounded-xl p-10 flex flex-col items-center text-center gap-5">
                <p className="bg-linear-to-b from-gray-200 p-5 rounded-full text-2xl">{service.icon}</p>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-accent">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

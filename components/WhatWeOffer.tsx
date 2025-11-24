import Image from "next/image";

export function WhatWeOffer() {
  const services = [
    {
      title: "Property Buying",
      description: "Discover your perfect home with our curated selection of quality properties. We guide you through every step of the purchasing process.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      title: "Property Selling",
      description: "Maximize your property's value with our proven marketing strategies and expert negotiation skills to ensure a successful sale.",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
    },
    {
      title: "Property Renting",
      description: "Access premium rental properties with flexible lease terms that perfectly match your lifestyle needs and budget requirements.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    },
    {
      title: "Commercial Leasing",
      description: "Secure the ideal commercial space for your business with tailored lease solutions and prime location opportunities.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-5xl font-bold text-gray-900">What We Offer</h2>
          <p className="text-gray-600 max-w-md text-right">
            We are redefining real estate with innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden h-[420px] w-full group cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-5 h-[175px] flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex-shrink-0">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[13px] leading-[1.65] overflow-hidden">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

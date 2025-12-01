'use client';

import Image from "next/image";
import { Bed, Maximize2 } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function PropertyListings() {
  const properties = [
    {
      id: 1,
      name: "Cozy Neighborhood Home",
      price: "$350,000",
      priceType: "sale",
      type: "Houses",
      status: "For Sale",
      description: "Charming home on a quiet street where kids ride bikes and neighbors know each other. Perfect backyard for playtime, close to excellent schools.",
      image: "/property-family-home.jpg",
      bedrooms: 3,
      sqft: "2,000 sq ft",
    },
    {
      id: 2,
      name: "Spacious Family Haven",
      price: "$850,000",
      priceType: "sale",
      type: "Villa",
      status: "For Rent",
      description: "Room for the whole family to spread out and grow. Large yard for kids to explore, quiet cul-de-sac, and walking distance to parks and playgrounds.",
      image: "/property-suburban-home.jpg",
      bedrooms: 5,
      sqft: "4,500 sq ft",
    },
    {
      id: 3,
      name: "Family Starter Home",
      price: "$1,800",
      priceType: "month",
      type: "Apartment",
      status: "For Rent",
      description: "Perfect for young families just starting out. Steps from elementary school and playground, safe neighborhood with family-friendly community events.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      bedrooms: 2,
      sqft: "1,200 sq ft",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 max-w-3xl mx-auto leading-tight">
            Find Your Family's Perfect Home
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <StaggerItem key={property.id}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                      {property.type}
                    </span>
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                      {property.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {property.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      {property.price}
                      {property.priceType === "month" && (
                        <span className="text-sm font-normal text-gray-600"> / month</span>
                      )}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {property.description}
                  </p>

                  <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{property.bedrooms} Bedroom{property.bedrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Maximize2 className="w-4 h-4" />
                      <span className="text-sm">{property.sqft}</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

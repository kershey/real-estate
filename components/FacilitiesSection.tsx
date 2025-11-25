'use client';

import {
  Home,
  Search,
  HeadphonesIcon,
  Smartphone,
  Video,
  DollarSign,
  CreditCard,
  Users,
} from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Home,
      title: "Diverse Property Listings",
      description: "Access a wide range of properties to suit your needs.",
    },
    {
      icon: Search,
      title: "Advanced Search Filters",
      description: "Find properties tailored to your preferences.",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description: "Get expert advice and assistance at your fingertips.",
    },
    {
      icon: Smartphone,
      title: "User-Friendly Platform",
      description: "Simple navigation for seamless property search.",
    },
    {
      icon: Video,
      title: "Virtual Tours",
      description: "Explore properties from the comfort of your home.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates for every budget.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Tailored payment plans for your convenience.",
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Discover neighborhoods that match your lifestyle.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl font-bold text-gray-900 max-w-md">
              Discover the Facilities We Offer at Apex
            </h2>
            <p className="text-gray-600 max-w-md text-right">
              With innovative solutions, market expertise, and a customer-first
              approach, we simplify the process to ensure a smooth experience.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <StaggerItem key={index}>
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

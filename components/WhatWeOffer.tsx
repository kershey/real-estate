'use client';

import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function WhatWeOffer() {
  const services = [
    {
      title: "Buying a Family Home",
      description:
        "We start with what your family actually needs — schools, a yard, enough bedrooms in five years — and work back from there.",
      image: "/offer-buying-porch.jpg",
      position: "object-[68%_center]",
      alt: "A welcoming front porch with wicker chairs and a porch swing",
    },
    {
      title: "Selling Your Home",
      description:
        "Most families sell to move up. I handle the listing, photos and showings around your schedule, so the kids' routine survives.",
      image: "/offer-selling-garden-home.jpg",
      position: "object-center",
      alt: "A well-kept home with a flower garden and white picket fence",
    },
    {
      title: "Renting a Family Home",
      description:
        "Not ready to buy yet? I find rentals in the school zones you want, with landlords who are used to kids and pets.",
      image: "/offer-renting-living-room.jpg",
      position: "object-[62%_center]",
      alt: "A modest, comfortable living room with warm afternoon light",
    },
    {
      title: "First-Time Buyer Guidance",
      description:
        "Expect plain-English answers — down payments, inspections, and what closing really costs.",
      image: "/offer-first-time-starter-home.jpg",
      position: "object-[40%_center]",
      alt: "A modest older home with children's bikes parked beside the garden path",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">How I Can Help</h2>
            <p className="text-muted-foreground max-w-md text-right">
              Four ways I work with families across Central Florida.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="relative rounded-3xl overflow-hidden h-[420px] w-full group cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className={`object-cover ${service.position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-card rounded-2xl p-5 h-[175px] flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-[13px] leading-[1.65] overflow-hidden">
                    {service.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

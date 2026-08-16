'use client';

import {
  School,
  ShieldCheck,
  Trees,
  Clock,
  Ruler,
  PiggyBank,
  CalendarClock,
  MessageCircle,
} from "lucide-react";
import { FadeIn } from "./animations/FadeIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function FacilitiesSection() {
  const facilities = [
    {
      icon: School,
      title: "Which School It Feeds",
      description:
        "Not the school nearby — the one the address is actually zoned for. I check the district map before you tour.",
    },
    {
      icon: ShieldCheck,
      title: "How Safe the Street Is",
      description:
        "Traffic, speed, sidewalks, and how the block feels on a weekday evening rather than a Sunday open house.",
    },
    {
      icon: Trees,
      title: "Parks and Places to Play",
      description:
        "Where the nearest playground is, whether you can walk there, and which parks are worth the short drive.",
    },
    {
      icon: Clock,
      title: "The Real Commute",
      description:
        "Drive times at 7:30am, not at noon. School run and work run, because they are rarely the same trip.",
    },
    {
      icon: Ruler,
      title: "Room to Grow Into",
      description:
        "Whether the house still works when your kids are teenagers, not just whether it works this year.",
    },
    {
      icon: PiggyBank,
      title: "What It Truly Costs",
      description:
        "Taxes, insurance, HOA dues and closing costs — the monthly number, not just the asking price.",
    },
    {
      icon: CalendarClock,
      title: "Showings Around Your Life",
      description:
        "Evenings and weekends work. Bring the kids; I have seen worse than a toddler in an open house.",
    },
    {
      icon: MessageCircle,
      title: "Straight Answers",
      description:
        "If a house is wrong for your family, I will tell you. Talking you out of one is part of the job.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl font-semibold text-foreground max-w-md">
              What I Look At Before You Ever See a House
            </h2>
            <p className="text-muted-foreground max-w-md text-right">
              By the time a listing reaches you, I have already checked the
              things that only start to matter once you live there.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <StaggerItem key={index}>
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Star,
  ChevronDown,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import HeroSection from "@/components/careers/HeroSection";
import Footer from "@/components/footer/page";

export default function CareersClient() {
  const [selectedCareerType, setSelectedCareerType] = useState("all");
  const { PageContentReady, setRequired, markReady } = useLoader();
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => setIsScrolled(container.scrollTop > 50);
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setRequired(["content", "jobs"]); // Loader waits for these
  }, [setRequired]);

  const careerTypes = [
    { value: "all", label: "All Positions", icon: Users },
    { value: "drivers", label: "For Drivers", icon: Truck },
    { value: "corporate", label: "For Corporate Office", icon: Building2 },
  ];

  const driverJobs = [
    {
      title: "Over-the-Road (OTR) Driver",
      location: "Nationwide",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      description:
        "Long-haul driving opportunities across the United States. Excellent benefits and home time.",
      requirements: [
        "Valid CDL-A",
        "2+ years experience",
        "Clean driving record",
        "DOT physical",
      ],
      benefits: [
        "Health Insurance",
        "401k Matching",
        "Paid Time Off",
        "Equipment provided",
      ],
    },
    {
      title: "Regional Driver",
      location: "West Coast",
      type: "Full-time",
      salary: "$60,000 - $75,000",
      description:
        "Regional routes with consistent home time. Dedicated customer accounts.",
      requirements: [
        "Valid CDL-A",
        "1+ year experience",
        "Clean MVR",
        "Hazmat endorsement preferred",
      ],
      benefits: [
        "Weekly home time",
        "Performance bonuses",
        "Health benefits",
        "Retirement plan",
      ],
    },
  ];

  const corporateJobs = [
    {
      title: "Logistics Coordinator",
      location: "Corporate HQ",
      type: "Full-time",
      salary: "$45,000 - $55,000",
      description:
        "Coordinate freight movements and manage customer relationships. Entry-level position with growth opportunities.",
      requirements: [
        "Bachelor's degree preferred",
        "Strong communication",
        "Computer skills",
        "Problem-solving abilities",
      ],
      benefits: ["Health Insurance", "401k", "PTO", "Career advancement"],
    },
  ];

  const allJobs = [...driverJobs, ...corporateJobs];

  const getFilteredJobs = () => {
    switch (selectedCareerType) {
      case "drivers":
        return driverJobs;
      case "corporate":
        return corporateJobs;
      default:
        return allJobs;
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Above-market compensation with performance bonuses",
    },
    {
      icon: Star,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision, and life insurance coverage",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules and generous paid time off",
    },
    {
      icon: Users,
      title: "Career Growth",
      description: "Training programs and advancement opportunities",
    },
  ];

  return (
    <div ref={containerRef} className="mainCon min-h-screen bg-background">
      <PageContentReady />

      {isScrolled && <Header isScrolled={isScrolled} />}
      <HeroSection isScrolled={isScrolled} />

      {/* Benefits Section */}
      <section className="mb-[42px] sm:mb-[78px] global-container">
        <div className="mt-[42px] sm:mt-[78px] flex gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide sm:justify-center sm:flex-wrap">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="snap-center shrink-0 w-[85%] sm:w-[236px] text-center bg-[#2A407A1F] px-6 py-8 rounded-[8px]"
              >
                <div className="w-16 h-16 bg-secondary-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-color mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Job Listings */}
      <section className="global-container">
        <div className="text-center mb-[42px] sm:mb-[78px]">
          <h2 className="core_heading mb-[12px]">Open Positions</h2>
          <p className="subheading mb-8">
            Find the perfect opportunity to advance your career with us.
          </p>

          {/* Career Type Dropdown */}
          <div className="flex justify-center mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>
                    {
                      careerTypes.find(
                        (type) => type.value === selectedCareerType
                      )?.label
                    }
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                {careerTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <DropdownMenuItem
                      key={type.value}
                      onClick={() => setSelectedCareerType(type.value)}
                      className="flex items-center space-x-3"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      <span>{type.label}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid gap-[42px] sm:gap-[78px]">
            {getFilteredJobs().map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border border-gray-100"
                ref={
                  index === getFilteredJobs().length - 1
                    ? () => markReady("jobs")
                    : null
                }
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between text-left">
                    <div className="mb-[12px]">
                      <CardTitle className="text-xl text-left mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <Button className="hero-button" asChild>
                      <Link href="/contact-us">Apply Now</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="text-left">
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Requirements:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Benefits:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

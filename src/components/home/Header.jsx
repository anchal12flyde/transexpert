"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import UseGoogleTranslate from "../customGoogleTranslator";

export default function Header({ isScrolled = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { ready, currentLang, setLanguage } = UseGoogleTranslate();
  if (!ready) return null;

  const services = [
    { name: "Full Truckload (FTL)", path: "/ftl" },
    { name: "Temperature-Controlled", path: "/temperature-controlled" },
    { name: "Cross Border", path: "/cross-border" },
    { name: "Cross Docking", path: "/cross-docking" },
  ];

  const countries = [
    { code: "en", name: "English", flag: "/images/assets/Frame.svg" },
    { code: "hi", name: "हिंदी", flag: "/images/assets/Frame.svg" },
    { code: "fr", name: "Français", flag: "/images/assets/Frame.svg" },
  ];

  const selectedCountry =
    countries.find((c) => c.code === currentLang) || countries[0];

  return (
    <header
      className={`main-header !sticky !top-0 !z-50 ${
        isScrolled ? "headerScrolled" : ""
      }`}
    >
      <div className="global-container">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src={
                isScrolled
                  ? "/images/assets/logo1.png"
                  : "/images/assets/logo2.png"
              }
              alt="TransExpert Logo"
              width={176}
              
              height={37}
              className="w-[130px] h-auto lg:w-[176px]"
            />
          </Link>

          {/* Navigation */}
          <nav
            className={`nav-links flex gap-6 ${
              isScrolled ? "!text-primary-color " : "text-white"
            }`}
          >
            {/* Desktop links */}
            <Link href="/about" className="lg:block hidden nav-link">
              About Us
            </Link>
            {/* <Link href="/ftl" className="lg:block hidden">
              Services
            </Link> */}

            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 font-[400] text-foreground hover:text-accent transition-colors cursor-pointer">
                  <span className="nav-link">Services</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-white !border-none ">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <DropdownMenuItem
                        key={service.path}
                        className="hover:bg-blue-100 cursor-pointer "
                        asChild
                      >
                        <Link
                          href={service.path}
                          className="flex items-center space-x-3 px-4 py-2 nav-link"
                        >
                          {/* <Icon className="h-4 w-4 text-accent" /> */}
                          <span>{service.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Link href="/sustainability" className="lg:block hidden nav-link">
              Sustainability
            </Link>
            <Link href="/industries" className="lg:block hidden nav-link">
              Industries
            </Link>
            <Link href="/contact-us" className="lg:block hidden nav-link">
              Get a quote
            </Link>

            <div className="lg:flex lg:gap-8 hidden macbook-navlink">
              <div className="hero-button flex items-center gap-2">
                <Image
                  src="/images/assets/Frame.svg"
                  width={25}
                  height={52}
                  alt="flag img"
                />
                <ChevronRight size={16} />
              </div>

              <Link href="#">
                <button
                  className={`hero-button ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Contact us
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div
              className="flex items-center gap-5 lg:hidden cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <Image
                src="/images/assets/Frame.svg"
                width={25}
                height={52}
                alt="flag"
              />
              <Image
                src={
                  isScrolled ? "/images/menuBlue.png" : "/images/hamburger.png"
                }
                width={20}
                height={20}
                alt="hamburger"
                className="w-[15px] h-auto lg:w-[20px]"
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[4px] z-40 transition-opacity"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-10 right-0 h-[531px] w-[203px] transform transition-transform duration-700 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: "url('/images/assets/sideMenu.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(5px 5px 8.3px rgba(0, 0, 0, 0.25))",
        }}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-black items-end text-right">
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 font-[400] text-foreground hover:text-accent transition-colors cursor-pointer">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white !border-none ">
              {services.map((service) => (
                <DropdownMenuItem
                  key={service.path}
                  className="hover:bg-blue-100 cursor-pointer "
                  asChild
                >
                  <Link
                    href={service.path}
                    className="flex items-center space-x-3 px-4 py-2 nav-link"
                  >
                    <span>{service.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/sustainability" onClick={() => setMenuOpen(false)}>
            Sustainability
          </Link>
          <Link href="/industries" onClick={() => setMenuOpen(false)}>
            Industries
          </Link>
          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
            Get a quote
          </Link>

          <Link href="#">
            <button
              className={`hero-button text-black`}
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

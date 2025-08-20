"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header({ isScrolled = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
            />
          </Link>

          {/* Navigation */}
          <nav
            className={`nav-links flex gap-6 ${
              isScrolled ? "!text-primary-color " : "text-white"
            }`}
          >
            {/* Desktop links */}
            <Link href="/about" className="sm:block hidden">
              About Us
            </Link>
            <Link href="/ftl" className="sm:block hidden">
              Services
            </Link>
            <Link href="/sustainability" className="sm:block hidden">
              Sustainability
            </Link>
            <Link href="#" className="sm:block hidden">
              Careers
            </Link>
            <Link href="/contact-us" className="sm:block hidden">
              Get a quote
            </Link>

            <div className="sm:flex sm:gap-10 hidden">
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
              className="flex items-center gap-5 sm:hidden cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <Image
                src="/images/assets/Frame.svg"
                width={25}
                height={52}
                alt="flag"
              />
              <Image
                src="/images/hamburger.png"
                width={20}
                height={20}
                alt="hamburger"
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-800 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col gap-6 p-6 text-black">
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/ftl" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/sustainability" onClick={() => setMenuOpen(false)}>
            Sustainability
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
            Get a quote
          </Link>

          <Link href="#">
            <button
              className={`hero-button ${
                isScrolled ? "text-black" : "text-black"
              }`}
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

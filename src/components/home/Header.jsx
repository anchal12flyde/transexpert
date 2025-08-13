"use client";
import { ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ isScrolled = false }) {
  return (
    <header
      className={`main-header !sticky !top-0 !z-50 transition-all duration-300 ${
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
                  ? "/images/assets/logo1.png" // scroll hone par dark logo
                  : "/images/assets/logo2.png" // default white logo
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
            <Link href="/about">About Us</Link>
            <Link href="/blogs/single-blog">Services</Link>
            <Link href="/sustainbility">Sustainability</Link>
            <Link href="/fleet-and-infrastructure">Careers</Link>
            <Link href="#">Get a quote</Link>

            <div className="flex gap-10 " >
              <div className="hero-button flex items-center gap-2 ">
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
          </nav>
        </div>
      </div>
    </header>
  );
}

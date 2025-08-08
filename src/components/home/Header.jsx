"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <div className="global-container">
        <div className="container">
          <Link href="/">
           
              <Image
                src="/images/assets/logo1.png"
                alt="TransExpert Logo"
                width={176}
                height={37}
              />
            
          </Link>

          <nav className="nav-links">
            <Link href="/about">About Us</Link>
            <Link href="#">Services</Link>
            <Link href="#">Sustainability</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Get a quote</Link>
            <Link href="#">
              <button className="hero-button ">flag</button>
            </Link>
            <Link href="#">
              <button className="hero-button ">Contact us</button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

const handleScroll = () => {
  const scrolled = window.scrollY;
  setScroll(scrolled > 20);

};

useEffect(()=>{
  handleScroll();
window.addEventListener("scroll",handleScroll);
return () => window.removeEventListener("scroll",handleScroll)
}, [])

  return (
    <header
       className={`fixed top-0 w-full z-50 transition-all ease-linear duration-300 util-flex-mx ${
    scroll ? "header-scroll" : "header-transparent"
  }`}
    >
      <div className="flex justify-between items-center py-3">
     
        <div className="relative h-12 w-34 logo-container">
          <Image
            src="/images/assets/logo2.png"
            alt="Logo White"
             fill
            sizes="(max-width: 768px) 100vw, 200px"
            className={`object-contain logo-white ${scroll ? "hidden-logo" : ""}`}
          />
          <Image
            src="/images/assets/logo1.png"
            alt="Logo Colored"
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className={`object-contain logo-colored ${scroll ? "" : "hidden-logo"}`}
          />
        </div>

        <div className="hidden md:flex items-center gap-10">
          <nav className="flex  items-center gap-8 nav-links">
            <Link href="#" className="nav-link">About Us</Link>
            <Link href="#" className="nav-link">Services</Link>
            <Link href="#" className="nav-link">Sustainability</Link>
            <Link href="#" className="nav-link">Careers</Link>
            <Link href="#" className="nav-link">Get a quote</Link>
          </nav>
          <select className="language-select">
            <option > 🏳‍🌈 </option>
            <option>Spanish</option>
            <option >French</option>
          </select>
          <Link
            href="#"
            className="hero-button"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex md:hidden justify-between items-right  py-2">
        <select className="language-select  rounded  py-1">
            <option >🏳‍🌈</option>
            <option>Spanish</option>
            <option >French</option>
        </select>

       <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
      </button>

        </div>

      </div>
        {menuOpen && (
        <div className="fixed inset-0 bg-black-600/60 backdrop-blur-sm z-50 flex md:hidden ">
            <div className="w-1/2"></div>
            <div className="white-box">
            <button
                onClick={() => setMenuOpen(false)}
                className="m-2 rounded hover:bg-gray-200 transition"
                aria-label="Toggle menu"
            >
                <Menu size={28} color="#27397A" />
            </button>
            <div className="flex flex-col items-end space-y-4  w-full p-2">
                <Link href="#" className="block text-right w-full text-[#27397A]">About Us</Link>
                <Link href="#" className="block text-right w-full text-[#27397A]">Services</Link>
                <Link href="#" className="block text-right w-full text-[#27397A]">Sustainability</Link>
                <Link href="#" className="block text-right w-full text-[#27397A]">Careers</Link>
                <Link href="#" className="block text-right w-full text-[#27397A]">Get a quote</Link>
                <Link
                href="#"
                className="block bg-[#E22A26] text-white rounded-lg py-2 px-3 text-center hover:bg-red-700 transition w-full"
                >
                Contact Us
                </Link>
            </div>
            </div>
        </div>
        )}




    </header>
  );
}


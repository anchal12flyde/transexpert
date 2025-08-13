import Image from "next/image";
import "./style.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer md:block hidden">
        <div className="footer-content">
          <div className="footer-main">
            {/* Left Section */}
            <div className="footer-left">
              <img
                src="/images/assets/logo2.png"
                alt="TransExpert Logo"
                className="footer-logo"
              />
              <p className="footer-desc">
                Trans Expert Inc. is a premier cross-border logistics provider,
                committed to delivering seamless freight solutions across
                Canada, the United States, and Mexico.
              </p>
            </div>

            {/* Middle Section */}
            <div className="flex items-start gap-[50px] ">
              <div className="footer-links">
                <ul>
                  <li>
                    {" "}
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/sustainability">Sustainability</Link>
                  </li>
                  <li>
                    <Link href="/get-a-quote">Get a quote</Link>
                  </li>
                  <li>Industries</li>
                  <li>Privacy Policy</li>
                </ul>
                <ul>
                  <li>Locations</li>
                  <li>Blog Posts</li>
                  <li>Careers</li>
                  <li>
                    <Link href="/fleet-and-infrastructure">
                      Fleet & Infrastructure
                    </Link>
                  </li>
                  <li>Raise a Query</li>
                  <li>Terms and conditions</li>
                  <li>Refund and cancellation policy</li>
                </ul>
              </div>

              {/* Right Section */}
              <div className="footer-contact">
                <div className="flex items-start gap-2 ">
                  <Image
                    src="/images/assets/call.png"
                    width={16}
                    height={16}
                    alt="call"
                    className="mt-2 "
                  />
                  <p>
                    +1 905-864-6443
                    <br />
                    Mon–Fri, 8 AM – 6 PM
                  </p>
                </div>

                <div className="flex items-start gap-2 ">
                  <Image
                    src="/images/assets/location.png"
                    width={16}
                    height={16}
                    alt="call"
                    className="mt-1"
                  />
                  <p>100 Market Drive, Milton ON L9T 3H5 CANADA</p>
                </div>
                <div className="flex items-start gap-2 ">
                  <Image
                    src="/images/assets/mail.png"
                    width={16}
                    height={16}
                    alt="call"
                    className="mt-1.5 "
                  />
                  <p>admin@transexpert.ca</p>
                </div>

                <button className="contact-btn">Contact us</button>
              </div>
            </div>
          </div>
          <p className="footer-copy">
            Copyright 2017, Trans Expert Inc – All Rights Reserved
          </p>
        </div>
      </footer>

      <footer className="footer-mobile md:hidden">
        {" "}
        <div className="global-container">
          {/* Logo */}
          <div className="footer-logo">
            <Image
              src="/images/assets/logo2.png"
              alt="TransExpert Logo"
              width={180}
              height={50}
            />
          </div>

          {/* Description */}
          <p className="footer-desc">
            Trans Expert Inc. is a premier cross-border logistics provider,
            committed to delivering seamless freight solutions across Canada,
            the United States, and Mexico.
          </p>

          {/* Links */}
          <div className="footer-links">
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Industries</li>
            </ul>
            <ul>
              <li>Sustainability</li>
              <li>Get a quote</li>
              <li>Locations</li>
              <li>Raise a Query</li>
              <li>Fleet & Infrastructure</li>
            </ul>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and conditions</li>
              <li>Refund & cancellation</li>
              <li>Drivers Safety</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="footer-icons">
            <Image
              src="/images/assets/location3.png"
              alt="Phone"
              width={20}
              height={20}
            />
            <Image
              src="/images/assets/call1.png"
              alt="Location"
              width={20}
              height={10}
            />
            <Image
              src="/images/assets/email2.png"
              alt="Email"
              width={20}
              height={20}
            />
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            Copyright 2017. Trans Expert Inc – All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

import Image from "next/image";
import "./style.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer lg:block hidden ">
        <div className="footer-content global-container">
          <div className="footer-main footer-main-macbook">
            {/* Left Section */}
            <div className="footer-left footer-left-macbook">
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
            <div className="flex items-start gap-[50px] footer-middle-macbook ">
              <div className="footer-links">
                <ul>
                  <li>
                    {" "}
                    <Link href="/about">About Us</Link>
                  </li>
                  {/* <li>
                    <Link href="/services">Services</Link>
                  </li> */}
                  <li>
                    <Link href="/sustainability">Sustainability</Link>
                  </li>
                  <li>
                    <Link href="/get-a-qoute">Get a quote</Link>
                  </li>
                  <li>
                    <Link href="/industries">Industries</Link>
                  </li>
                  <Link href="/privacy-policy">
                    <li>Privacy Policy</li>
                  </Link>
                </ul>
                <ul>
                  {/* <li>
                    <Link href="#">Locations</Link>
                  </li> */}
                  <li>
                    <Link href="/blogs">Blog Posts</Link>
                  </li>
                  <li>Careers</li>
                  <li>
                    <Link href="/fleet-and-infrastructure">
                      Fleet & Infrastructure
                    </Link>
                  </li>
                  {/* <li>Raise a Query</li> */}
                  <Link href="/terms-and-conditions">
                    <li>Terms and conditions</li>
                  </Link>

                  {/* <li>Refund and cancellation policy</li> */}
                </ul>
              </div>

              {/* Right Section */}
              <div className="footer-contact ">
                <div className="flex items-start gap-2 pb-[15px]">
                  <Image
                    src="/images/assets/call.png"
                    width={16}
                    height={16}
                    alt="call"
                    className="mt-1 "
                  />
                  <p className="flex flex-col gap-0.5">
                    <span className="address-details">+1 905-864-6443</span>
                    <span>Available 24 × 7</span>
                  </p>
                </div>

                <div className="flex items-start gap-2 pb-[15px]">
                  <Image
                    src="/images/assets/location.png"
                    width={16}
                    height={16}
                    alt="call"
                  />
                  <p>100 Market Drive,<br/> Milton ON L9T 3H5 CANADA</p>
                </div>
                <div className="flex items-start gap-2 ">
                  <Image
                    src="/images/assets/mail.png"
                    width={16}
                    height={16}
                    alt="call"
                    className="mt-1 "
                  />
                  <p>
                    <span>admin@transexpert.ca</span>
                    <br />
                    <span>We reply within 24 hours</span>
                  </p>
                </div>
                <div className="">
                  <Link href="/contact-us">
                    {" "}
                    <button className="contact-btn">Contact us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="footer-copy">
            Copyright 2017, Trans Expert Inc – All Rights Reserved
          </p>
        </div>
        <div className="decor-image-footer">
          <img src="/images/assets/vector2.png" alt="Decoration" />
        </div>
      </footer>

      <footer className="footer-mobile lg:hidden">
        {" "}
        <div className="global-container">
          {/* Logo */}
          <div className="justify-items-center mb-[24px]">
            <Image
              src="/images/assets/logo2.png"
              alt="TransExpert Logo"
              width={172}
              height={47}
            />
          </div>

          {/* Description */}
          <p className="footer-desc-mobile">
            Trans Expert Inc. is a premier cross-border logistics provider,
            committed to delivering seamless freight solutions across Canada,
            the United States, and Mexico.
          </p>

          {/* Links */}
          <div className="footer-links-mobile">
            <ul>
              <li>
                {" "}
                <Link href="/about">About Us</Link>
              </li>
              {/* <li>Services</li> */}
              <li>Careers</li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/sustainability">Sustainability</Link>
              </li>
              <li>
                <Link href="/get-a-qoute">Get a quote</Link>
              </li>
              {/* <li>Locations</li> */}
              {/* <li>Raise a Query</li> */}
              <li>
                <Link href="/fleet-and-infrastructure">
                  Fleet & Infrastructure
                </Link>
              </li>
            </ul>
            <ul>
              <Link href="/privacy-policy">
                <li>Privacy Policy</li>
              </Link>
              <Link href="/terms-and-conditions">
                <li>Terms and conditions</li>
              </Link>
              {/* <li>Refund & cancellation</li>
              <li>Drivers Safety</li> */}
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
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
          <p className="footer-copy-mobile">
            Copyright 2017. Trans Expert Inc – All Rights Reserved
          </p>
        </div>
        <img
          src="/images/assets/vector2.png"
          alt="Decoration"
          className="decor-image-footer-mobile"
        />
      </footer>
    </>
  );
}

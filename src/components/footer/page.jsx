import Image from "next/image";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer ">
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
              committed to delivering seamless freight solutions across Canada,
              the United States, and Mexico.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex items-start gap-[50px] ">
            <div className="footer-links">
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Sustainability</li>
                <li>Get a quote</li>
                <li>Industries</li>
                <li>Privacy Policy</li>
              </ul>
              <ul>
                <li>Locations</li>
                <li>Blog Posts</li>
                <li>Careers</li>
                <li>Fleet & Infrastructure</li>
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
  );
}

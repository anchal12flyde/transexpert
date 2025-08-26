"use client";
import Link from "next/link";

export default function Certification() {
  return (
    <>
      <div className="certification-container global-container">
        <h2 className="heading">Credentialed for Seamless Movement</h2>

        <p className="subheading desktop-only ">
          We work according to the latest technologies and working methods. Our
          company has extensive experience in providing services.
        </p>
        <div className="certification-logos">
          <Link href="/certifications">
            <img src="/images/assets/image1.png" alt="Company 1" />
          </Link>
          <Link href="/certifications">
            <img src="/images/assets/image2.png" alt="Company 2" />
          </Link>
          <Link href="/certifications">
            <img src="/images/assets/image3.png" alt="Company 3" />
          </Link>
          <Link href="/certifications">
            <img src="/images/assets/image4.png" alt="Company 4" />
          </Link>
          <Link href="/certifications">
            <img src="/images/assets/image5.png" alt="Company 5" />
          </Link>
          <Link href="/certifications">
            <img src="/images/assets/image6.png" alt="Company 6" />
          </Link>
          <Link href="/certifications">
            <img src="/images/assets/image7.png" alt="Company 7" />
          </Link>
          <Link href="/certifications">
            <img src="/images/assets/image8.png" alt="Company 8" />
          </Link>
        </div>

        <p className="cert-desc mobile-only ">
          We work according to the latest technologies and working methods. Our
          company has extensive experience in providing services.
        </p>
      </div>
    </>
  );
}

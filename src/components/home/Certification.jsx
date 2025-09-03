"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Certification() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <>
      <div className="certification-container global-container !z-100 " >
        <motion.h2
          className="heading"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Credentialed for Seamless Movement
        </motion.h2>

        <motion.p
          className="subheading desktop-only"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          We work according to the latest technologies and working methods. Our
          company has extensive experience in providing services.
        </motion.p>
        <motion.div
          className="certification-logos"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
        >
          {[
            "image1.png",
            "image2.png",
            "image3.png",
            "image4.png",
            "image5.png",
            "image6.png",
            "image7.png",
            "image8.png",
          ].map((img, idx) => (
            <Link key={idx} href="/certifications">
              <img src={`/images/assets/${img}`} alt={`Company ${idx + 1}`} />
            </Link>
          ))}
        </motion.div>

        <motion.p
          className="cert-desc mobile-only"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
        >
          We work according to the latest technologies and working methods. Our
          company has extensive experience in providing services.
        </motion.p>
      </div>
    </>
  );
}

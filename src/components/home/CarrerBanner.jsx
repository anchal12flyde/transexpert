"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CareersBanner = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }, 
    },
  };

  return (
    <section className="careers-banner global-container">
      <motion.div
        className="careers-content-wrapper-home"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="careers-image-container-home"
          variants={imageVariants}
        >
          <Image
            src="/images/Drive with us phot.png"
            alt="Driver"
            width={800}
            height={430}
            className="careers-image object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div className="careers-text-content" variants={textVariants}>
          <motion.p className="heading" variants={textVariants}>
            Drive Your Future with TransExpert
          </motion.p>

          <motion.p className="subheading pb-[8px]" variants={textVariants}>
            Join us as a dedicated driver and help keep goods moving safely,
            reliably, and on time.
          </motion.p>

          <motion.p className="subheading pb-[8px]" variants={textVariants}>
            Bring your skills as a logistics professional and make supply chains
            smarter and more efficient.
          </motion.p>

          <motion.p className="subheading" variants={textVariants}>
            Be part of a supportive team that’s growing across North America and
            shaping the future of logistics together.
          </motion.p>
          <Link href="/contact-us">
            <button className="hero-button">Apply Now</button>
          </Link>
        </motion.div>
      </motion.div>
      <div className="drive-image">
        <img src="/images/assets/drive-x.png" alt="Decoration" />
      </div>
    </section>
  );
};

export default CareersBanner;

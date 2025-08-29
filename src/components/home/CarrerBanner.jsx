"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="careers-image-container-home"
          variants={imageVariants}
        >
          <Image
            src="/images/assets/Frame.png"
            alt="Driver"
            width={800}
            height={0}
            className="careers-image object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div className="careers-text-content" variants={textVariants}>
          <motion.p className="heading" variants={textVariants}>
            Drive Your Future with TransExpert
          </motion.p>

          <motion.p className="subheading pb-[8px]" variants={textVariants}>
            We're always looking for dedicated drivers, logistics pros, and
            problem-solvers to join our growing North American team.
          </motion.p>

          <motion.p className="subheading pb-[8px]" variants={textVariants}>
            We're always looking for dedicated drivers, logistics pros, and
            problem-solvers to join our growing North American team.
          </motion.p>

          <motion.p className="subheading" variants={textVariants}>
            We're always looking for dedicated drivers, logistics pros, and
            problem-solvers to join our growing North American team.
          </motion.p>

          <motion.button className="hero-button" variants={textVariants}>
            Apply Now
          </motion.button>
        </motion.div>
      </motion.div>
      {/* <div className="drive-image">
        <img src="/images/assets/drive-x.png" alt="Decoration" />
      </div> */}
    </section>
  );
};

export default CareersBanner;

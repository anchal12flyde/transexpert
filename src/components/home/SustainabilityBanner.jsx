"use client";

import { motion } from "framer-motion";

const SustainabilityBanner = () => {
  // fade-in-up variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="content">
      <div className="heroSection">
        <video
          src="/images/videos/trucks_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="backgroundVideo"
        />
        <div className="global-container">
          <div className="textOverlay">
            <motion.h2
              className="heading text-thm-white"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              We Care. And We Prove It.
            </motion.h2>

            <motion.p
              className="subheading"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2 }} 
            >
              Sustainability isn’t a campaign, it’s our operating system.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityBanner;

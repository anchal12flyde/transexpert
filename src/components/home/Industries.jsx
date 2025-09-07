"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Industries() {
  const router = useRouter();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="industries-section ">
      <div className="industries-container">
        {/* Left Side */}
        <motion.div
          className="industries-text"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="heading">Industries we work with</h2>

          <p className="subheading">
            From raw materials to finished goods, we deliver reliable,
            cross-border logistics solutions tailored to your industry. Whether
            you're stocking shelves, supplying storefronts, or fueling
            production lines, TransExpert ensures fast, secure, and seamless
            transportation across Canada, the U.S., and Mexico.
          </p>
          <br />
          <p className="subheading">
            Our expertise spans manufacturing, retail, automotive, and consumer
            goods, giving us the insight to handle every supply chain challenge
            with precision. With dedicated routes, real-time tracking, and a
            commitment to on-time delivery, TransExpert keeps your business
            moving without disruption.
          </p>
          <Link href="/contact-us">
            <button className="hero-button">Know more</button>
          </Link>
        </motion.div>

        {/* Right Side */}

        <div className="industries-cards">
          {[
            { img: "/images/assets/Wholesale.jpg", label: "Wholesale" },
            { img: "/images/assets/Retail.jpg", label: "Retail" },
            { img: "/images/assets/Manufacture.jpg", label: "Manufacturers" },
          ].map((card, index) => (
            <div
              key={index}
              className="industry-card"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <span className="industry-span">{card.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

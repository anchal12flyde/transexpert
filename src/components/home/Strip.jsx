"use client";

import { motion, animate, useMotionValue, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function RollingDigit({ target, duration = 2 }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (height > 0) {
      const controls = animate(y, -target * height, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [height, target]);

  return (
    <div
      style={{
        overflow: "hidden",
        height: "1em",
        display: "flex",
        verticalAlign: "bottom",
      }}
    >
      <motion.div style={{ y }}>
        {[...Array(10).keys()].map((digit) => (
          <div
            key={digit}
            ref={digit === 0 ? ref : null}
            style={{ height: "1em", textAlign: "center" }}
          >
            {digit}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Strip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) setStart(true);
  }, [isInView]);

  const number = start ? "250" : "000";

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
    <section className="counterSection" ref={ref}>
      <div className="global-container">
        <motion.h2
          className="text"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          A Fleet of{" "}
          <span className="number number-anime">
            {number.split("").map((digit, i) => (
              <RollingDigit key={i} target={parseInt(digit)} duration={2} />
            ))}
          </span>
          + Vehicles Ready to Move Your Business Forward
        </motion.h2>
      </div>
    </section>
  );
}

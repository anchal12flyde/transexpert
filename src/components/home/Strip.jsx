"use client";
import { motion, animate, useMotionValue, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function RollingDigit({ target, duration = 2 }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const y = useMotionValue(0);

  // measure once mounted
  useEffect(() => {
    if (ref.current) setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    if (!height && ref.current) setHeight(ref.current.clientHeight);
  }, [height]);

  useEffect(() => {
    if (height > 0 && Number.isFinite(target)) {
      // reset to start before each run
      y.set(0);
      const controls = animate(y, -target * height, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [height, target]); // re-run when digit or height changes

  return (
    <div
      style={{
        overflow: "hidden",
        height: "1em",
        display: "inline-block",
        verticalAlign: "bottom",
      }}
    >
      <motion.div style={{ y }}>
        {Array.from({ length: 10 }, (_, digit) => (
          <div
            key={digit}
            ref={digit === 0 ? ref : null}
            style={{
              height: "1em",
              lineHeight: 1,
              display: "block",
              textAlign: "center",
            }}
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

  // start should be false, then true when in view
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) setStart(true);
  }, [isInView]);

  const number = start ? "250" : "000";

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
          viewport={{ once: true, amount: 0.3 }}
        >
          A Fleet of{" "}
          <span
            className="number number-anime"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {number.split("").map((d, i) => (
              <RollingDigit key={i} target={parseInt(d, 10)} duration={2} />
            ))}
          </span>{" "}
          + Vehicles Ready to Move Your Business Forward
        </motion.h2>
      </div>
    </section>
  );
}

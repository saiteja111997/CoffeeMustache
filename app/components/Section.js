"use client";

import { motion } from "framer-motion";

export default function Section({ id, reverse, heading, description, image }) {
  const textAnimation = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id={id} className="flex flex-col md:flex-row items-center py-16">
      {/* Text Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={textAnimation}
        className={`w-full md:w-1/2 px-8 ${reverse ? "md:order-2" : ""} font-sans`}
      >
        <h2 className="text-4xl font-bold text-brown mb-4">{heading}</h2>
        <p className="text-lg text-gray-700">{description}</p>
      </motion.div>


      {/* Image Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={imageAnimation}
        className="w-full md:w-1/2 px-8"
      >
        <img
          src={image}
          alt="Placeholder"
          className="rounded-lg shadow-lg w-full h-auto "
        />
      </motion.div>
    </div>
  );
}

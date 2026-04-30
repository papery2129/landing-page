"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  // Configuramos desde dónde empieza la animación según la dirección
  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
        x: direction === "left" || direction === "right" ? directionOffset[direction] : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-100px" }} // Anima un poco antes de que sea 100% visible
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
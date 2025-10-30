import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center px-8 py-4 glass fixed top-0 left-0 right-0 z-20"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
    >
      <h1 className="text-2xl">🌌 Fitness Galaxy</h1>
      <div className="space-x-4">
        <button>Dashboard</button>
        <button>Goals</button>
        <button>Profile</button>
      </div>
    </motion.nav>
  );
}

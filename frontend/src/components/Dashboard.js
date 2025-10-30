import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ActivityChart from "./ActivityChart";

export default function Dashboard() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 px-6 relative z-10">
      <motion.h1
        className="text-4xl text-center mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Your Galaxy Fitness Dashboard 🪐
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="glass p-6 text-center">
          <h2>🏃 Steps Today</h2>
          <p className="text-3xl font-bold mt-2 text-purple-300">8,450</p>
        </div>

        <div className="glass p-6 text-center">
          <h2>🔥 Calories Burned</h2>
          <p className="text-3xl font-bold mt-2 text-pink-300">720</p>
        </div>

        <div className="glass p-6 text-center">
          <h2>🕒 Current Time</h2>
          <p className="text-2xl mt-2 text-indigo-300">{time.toLocaleTimeString()}</p>
        </div>
      </motion.div>

      <ActivityChart />

      <motion.div
        className="glass mt-10 p-6 text-center text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p>✨ “Your fitness journey is written in the stars — make it legendary.”</p>
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Galaxy background layers */}
      <div className="stars"></div>
      <div className="twinkling"></div>

      <Navbar />

      <motion.div
        className="p-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Dashboard />
      </motion.div>
    </div>
  );
}

export default App;

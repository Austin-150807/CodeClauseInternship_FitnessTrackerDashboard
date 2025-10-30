import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Mon", calories: 400 },
  { name: "Tue", calories: 600 },
  { name: "Wed", calories: 750 },
  { name: "Thu", calories: 500 },
  { name: "Fri", calories: 900 },
  { name: "Sat", calories: 700 },
  { name: "Sun", calories: 850 },
];

export default function ActivityChart() {
  return (
    <motion.div
      className="glass p-6 mt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-xl mb-4">🚀 Weekly Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="calories"
            stroke="#a855f7"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

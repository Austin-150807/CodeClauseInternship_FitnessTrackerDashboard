import React, { useState } from "react";
import API from "../api";

export default function ActivityForm({ onAdd }) {
  const [form, setForm] = useState({ type: "", duration: "", calories: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/activities", form);
      setForm({ type: "", duration: "", calories: "" });
      onAdd();
    } catch (err) {
      alert(err.response?.data?.error || "Failed to add activity");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row g-2">
        <div className="col-md-3">
          <input
            className="form-control"
            name="type"
            placeholder="Activity Type"
            value={form.type}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            name="duration"
            placeholder="Duration (mins)"
            value={form.duration}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            name="calories"
            placeholder="Calories"
            value={form.calories}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-success w-100" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
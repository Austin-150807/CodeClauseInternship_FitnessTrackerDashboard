import express from "express";
import Activity from "../models/Activity.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Get all activities
router.get("/", protect, async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activities" });
  }
});

// ✅ Add activity
router.post("/", protect, async (req, res) => {
  const { type, duration, calories } = req.body;

  try {
    const activity = await Activity.create({
      user: req.user._id,
      type,
      duration,
      calories,
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: "Error adding activity" });
  }
});

// ✅ Delete activity
router.delete("/:id", protect, async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) return res.status(404).json({ message: "Activity not found" });

    if (activity.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await activity.deleteOne();
    res.json({ message: "Activity deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting activity" });
  }
});

export default router;

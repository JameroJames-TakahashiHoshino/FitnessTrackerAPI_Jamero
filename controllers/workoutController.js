const Workout = require('../models/workout');

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new workout
const addWorkout = async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json({
      message: 'Workout added successfully',
      workout
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Full update
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!workout)
      return res.status(404).json({ message: 'Workout not found' });

    res.status(200).json({
      message: 'Workout updated successfully',
      workout
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Partial update
const patchWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!workout)
      return res.status(404).json({ message: 'Workout not found' });

    res.status(200).json({
      message: 'Workout partially updated',
      workout
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);

    if (!workout)
      return res.status(404).json({ message: 'Workout not found' });

    res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid workout ID' });
  }
};

module.exports = {
  getWorkouts,
  addWorkout,
  updateWorkout,
  patchWorkout,
  deleteWorkout
};

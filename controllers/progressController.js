const Progress = require('../models/progress');

// Get all progress records
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find().sort({ createdAt: -1 });
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new progress record
const addProgress = async (req, res) => {
  try {
    const newProgress = new Progress(req.body);
    await newProgress.save();
    res.status(201).json({ message: 'Progress added successfully!', progress: newProgress });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a progress record
const updateProgress = async (req, res) => {
  try {
    const updated = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Progress record not found' });
    res.status(200).json({ message: 'Progress updated successfully!', progress: updated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a progress record
const deleteProgress = async (req, res) => {
  try {
    const deleted = await Progress.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Progress record not found' });
    res.status(200).json({ message: 'Progress record deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid progress ID' });
  }
};

module.exports = { getProgress, addProgress, updateProgress, deleteProgress };

const express = require('express');
const router = express.Router();
const { validateWorkout } = require('../middlewares/validationMiddleware');
const { getWorkouts, addWorkout, updateWorkout, deleteWorkout, patchWorkout } = require('../controllers/workoutController');

// Routes
router.get('/', getWorkouts);
router.post('/', validateWorkout, addWorkout);
router.put('/:id', validateWorkout, updateWorkout);
router.patch('/:id', patchWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;

// routes/index.js
const express = require('express');
const router = express.Router();

const Training = require('../models/trainingsModel');

// Display all trainings
router.get('/api/trainings', async (req, res) => {
    const trainings = await Training.getAllTrainings();
    res.json(trainings);
});

module.exports = router;

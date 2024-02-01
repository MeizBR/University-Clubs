// routes/index.js
const express = require('express');
const router = express.Router();

const Training = require('../models/trainingsModel');
const Inscription = require('../models/inscriptionsModel')

// Display all trainings
router.get('/api/trainings', async (req, res) => {
    const trainings = await Training.getAllTrainings();
    res.json(trainings);
});

// Display all inscriptions
router.get('/api/inscriptions', async (req, res) => {
    const inscriptions = await Inscription.getAllInscriptions();
    res.json(inscriptions);
});

// Add a new inscription
router.post('/api/addInscription', async (req, res) => {
    const {
      student_firstname,
      student_lastname,
      student_section,
      student_year,
      training_name
    } = req.body;
  
    const newInscription = await Inscription.createInscription({
      student_firstname,
      student_lastname,
      student_section,
      student_year,
      training_name
    });
  
    res.json(newInscription);
});  

module.exports = router;

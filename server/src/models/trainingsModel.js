// models/trainingsModel.js
const pool = require('../config/db');

class TrainingsModel {
  static async getAllTrainings() {
    const query = 'SELECT * FROM trainings';
    const result = await pool.query(query);
    return result.rows;
  }

  static async createTraining(trainingData) {
    const {
      TrainingName,
      TrainingDate,
      TrainingHour,
      TrainingCapacity,
      TrainingPlace,
      TrainingInstructor,
      TrainingDetails,
      TrainingImage
    } = trainingData;

    const query = `
      INSERT INTO trainings (
        TrainingName,
        TrainingDate,
        TrainingHour,
        TrainingCapacity,
        TrainingPlace,
        TrainingInstructor,
        TrainingDetails,
        TrainingImage
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`;

    const values = [
      TrainingName,
      TrainingDate,
      TrainingHour,
      TrainingCapacity,
      TrainingPlace,
      TrainingInstructor,
      TrainingDetails,
      TrainingImage
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // You can add other methods as needed for this model

  // ...

}

module.exports = TrainingsModel;

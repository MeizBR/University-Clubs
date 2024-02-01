// models/inscriptionsModel.js
const pool = require('../config/db');

class InscriptionsModel {
  static async getAllInscriptions() {
    const query = 'SELECT * FROM inscriptions';
    const result = await pool.query(query);
    return result.rows;
  }

  static async createInscription(inscriptionData) {
    const {
      student_firstname,
      student_lastname,
      student_section,
      student_year,
      training_name
    } = inscriptionData;
  
    const query = `
      INSERT INTO inscriptions (
        student_firstname,
        student_lastname,
        student_section,
        student_year,
        training_name
      ) VALUES ($1, $2, $3, $4, $5)
      RETURNING *`;
  
    const values = [
      student_firstname,
      student_lastname,
      student_section,
      student_year,
      training_name
    ];
  
    const result = await pool.query(query, values);
    return result.rows[0];
  }  

}

module.exports = InscriptionsModel;

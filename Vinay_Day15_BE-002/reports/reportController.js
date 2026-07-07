const pool = require("../config/db");

exports.attendanceReport = async (req, res) => {

  try {

    const result = await pool.query(`
      SELECT
      e.name,
      COUNT(a.id) AS total_attendance
      FROM employees e
      LEFT JOIN attendance a
      ON e.id = a.employee_id
      GROUP BY e.name
    `);

    res.json(result.rows);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
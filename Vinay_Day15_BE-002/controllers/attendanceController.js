const pool = require("../config/db");
exports.getAttendance = async (req, res) => {
    res.json({
        message: "Attendance API Working"
    });
};
exports.addAttendance = async (req, res) => {

  try {

    const {
      employee_id,
      attendance_date,
      status
    } = req.body;

    const result = await pool.query(
      `INSERT INTO attendance
       (employee_id, attendance_date, status)
       VALUES ($1,$2,$3)
       RETURNING *`,
      [employee_id, attendance_date, status]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
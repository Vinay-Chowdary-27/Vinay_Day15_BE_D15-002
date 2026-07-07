const pool = require("../config/db");
exports.getLeaves = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM leaves'
        );

        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
};
exports.applyLeave = async (req, res) => {

  try {

    const {
      employee_id,
      leave_type,
      start_date,
      end_date,
      reason
    } = req.body;

    const result = await pool.query(
      `INSERT INTO leaves
      (employee_id, leave_type,
       start_date,end_date,reason)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *`,
      [
        employee_id,
        leave_type,
        start_date,
        end_date,
        reason
      ]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
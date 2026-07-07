const { body } = require("express-validator");

exports.attendanceValidation = [
  body("employee_id")
    .notEmpty()
    .withMessage("Employee ID required"),

  body("attendance_date")
    .notEmpty()
    .withMessage("Date required"),

  body("status")
    .isIn(["Present", "Absent"])
    .withMessage("Status must be Present or Absent")
];
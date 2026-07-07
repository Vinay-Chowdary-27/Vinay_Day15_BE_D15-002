const { body } = require("express-validator");

exports.leaveValidation = [
  body("employee_id")
    .notEmpty()
    .withMessage("Employee ID required"),

  body("leave_type")
    .notEmpty()
    .withMessage("Leave type required"),

  body("start_date")
    .notEmpty()
    .withMessage("Start date required"),

  body("end_date")
    .notEmpty()
    .withMessage("End date required")
];
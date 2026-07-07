const express = require("express");

const router = express.Router();

const attendanceController =
require('../controllers/attendanceController');
const {
  addAttendance
} = require("../controllers/attendanceController");

const {
  attendanceValidation
} = require("../validations/attendanceValidation");

const validate = require("../middleware/validationMiddleware");

router.post(
  "/",
  attendanceValidation,
  validate,
  addAttendance
);
router.get(
    '/',
    attendanceController.getAttendance
);

module.exports = router;
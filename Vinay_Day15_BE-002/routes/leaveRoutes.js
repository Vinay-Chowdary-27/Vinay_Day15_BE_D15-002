const express = require("express");

const router = express.Router();
const leaveController = require('../controllers/leaveController');

const {
  applyLeave
} = require("../controllers/leaveController");

const {
  leaveValidation
} = require("../validations/leaveValidation");

const validate = require("../middleware/validationMiddleware");

router.post(
  "/",
  leaveValidation,
  validate,
  applyLeave
);
router.get('/', leaveController.getLeaves);


module.exports = router;
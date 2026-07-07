const express = require("express");
const cors = require("cors");

require("dotenv").config();

const attendanceRoutes = require("./routes/attendanceRoutes");
const leaveRoutes = require("./routes/leaveRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/attendance", attendanceRoutes);
app.use("/api/leaves", leaveRoutes);

app.get("/", (req, res) => {
  res.send("FlowTrack 3600 API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
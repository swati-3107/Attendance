const {
  getBatch,
  addBatch,
  updateBatch,
  deleteBatch,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
  getAttendance,
  addAttendance,
  updateAttendance,
  deleteAttendance,
  getStudentsByBatch,
} = require("../controller/adminController");

const router = require("express").Router();

router
  .get("/batch", getBatch)
  .post("/batch-add", addBatch)
  .put("/batch-update/:batchId", updateBatch)
  .delete("/batch-delete/:batchId", deleteBatch)

  .get("/student", getStudent)
  .get("/student-by-batch/:batchId", getStudentsByBatch)
  .post("/student-add", addStudent)
  .put("/student-update/:studentId", updateStudent)
  .delete("/student-delete/:studentId", deleteStudent)

  .get("/attendance/:studId", getAttendance)
  .post("/attendance-add", addAttendance)
  .put("/attendance-update/:attendaceId", updateAttendance)
  .delete("/attendance-delete", deleteAttendance);
// .delete("/attendance-delete/:attendaceId", deleteAttendance);

module.exports = router;

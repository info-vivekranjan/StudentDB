const express = require("express");
const studentDetailsSchema = require("../model/studentDetails.model");

const router = express.Router();
router.post("/", async (req, res) => {
  const studentData = await studentDetailsSchema.create(req.body);
  return res.status(201).json({ data: studentData });
});

router.get("/", async (req, res) => {
  const studentData = await studentDetailsSchema.find().populate("resultsId");
  return res.status(200).json({ data: studentData });
});

router.get("/:id", async (req, res) => {
  const studentData = await studentDetailsSchema.findById(req.params.id);
  return res.status(200).json({ data: studentData });
});

router.patch("/:id", async (req, res) => {
  const studentData = await studentDetailsSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res.status(200).json({ data: studentData });
});

router.delete("/:id", async (req, res) => {
  const studentData = await studentDetailsSchema.findByIdAndDelete(
    req.params.id
  );
  return res.status(204).json({ data: studentData });
});

module.exports = router;

const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    resultsId: { type: mongoose.Schema.Types.ObjectId, ref: "studentResult" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StudentDetails = mongoose.model("studentDetail", studentDetailsSchema);
module.exports = StudentDetails;

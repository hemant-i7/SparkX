import mongoose from "mongoose";
import { connect } from "@/lib/db";

connect();

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],
  attachments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attachment",
    },
  ],
  purchases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Purchase",
    },
  ],
  createdAt: Date,
  updatedAt: Date,
});

// Check if the model already exists before defining it
const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);
export default Course;

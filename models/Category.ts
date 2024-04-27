import mongoose from "mongoose";
import { connect } from "@/lib/db";

connect();

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const Category =
  mongoose.models.category || mongoose.model("Category", CategorySchema);
export default Category;

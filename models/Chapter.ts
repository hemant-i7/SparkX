import { connect } from "@/lib/db";
import { channel } from "diagnostics_channel";
import mongoose from "mongoose";

connect();

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  videoUrl: {
    type: String,
    required: true,
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const Chapter =
  mongoose.models.chapter || mongoose.model("chapter", ChapterSchema);

export default Chapter;

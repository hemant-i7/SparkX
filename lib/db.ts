import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to Mongoose server");
    });

    connection.on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
  } catch (err) {
    console.log(err);
  }
}

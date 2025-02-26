import mongoose from "mongoose";

const mongodbUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`;

export const db = mongoose.createConnection(mongodbUri).asPromise();

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`,
      {
        dbName: "hospital",
      }
    );
    console.log("Connected DB");
  } catch (error) {
    console.error(error);
  }
})();

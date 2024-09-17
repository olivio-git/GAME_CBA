import mongoose from "mongoose";

const CreateConnection = async () => {
  try {
    const socket = await mongoose.connect(
      `${process.env.MONGO_URI}${process.env.MONGO_DB}`,
    );
    if (socket.connection.readyState) {
      console.log(socket.connection.name);

      return { message: "Connection Successfull" };
    }
    console.log("Error connection");
    throw new Error({ message: "Error connection" });
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default CreateConnection;

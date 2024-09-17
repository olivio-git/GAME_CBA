import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import CreateConnection from "./src/mongoose.js";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is Running" });
});

app.listen(process.env.PORT, async () => {
  const reesponseConnection = await CreateConnection();
  console.log(`Server running in port ${process.env.PORT}`);
});

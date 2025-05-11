import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoutes.js"; // Import the books route
import cors from "cors"; // Import CORS middleware

const app = express();

app.use(express.json());
app.use(cors()); // Middleware to parse JSON request body

// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with your frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// ); // Middleware to enable CORS

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome Tushar");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB is connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

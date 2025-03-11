import express from "express";
import { AppDataSource } from "./data-source";
import categoryRoutes from "./routes/categoryRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use("/api/v1/category", categoryRoutes);
app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log("Server running on port 3000 \nhttp://localhost:3000"));
  })
  .catch((error) => console.log(error));
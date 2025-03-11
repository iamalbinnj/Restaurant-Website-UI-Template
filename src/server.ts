import express from "express";
import { AppDataSource } from "./data-source";
import categoryRoutes from "./routes/categoryRoutes";
import { errorHandler } from "./middleware/errorHandler";
import path from "path";

const app = express();

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", categoryRoutes);
app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log("Server running on port 3000 \nhttp://localhost:3000"));
  })
  .catch((error) => console.log(error));
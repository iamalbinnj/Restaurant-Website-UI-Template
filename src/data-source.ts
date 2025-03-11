import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "./entity/Category";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1", 
  port: 3306,
  username: "root", 
  password: "", 
  database: "category-api", 
  synchronize: true,
  logging: false,
  entities: [Category],
  migrations: [],
  subscribers: [],
});
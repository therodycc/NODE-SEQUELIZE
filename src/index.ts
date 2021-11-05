import express, { Application, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import users from "./routes/users";
import pool from "./db/connection";
import sequelize from "./db/connection";


class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use("/api/users", users);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server on port ${this.app.get("port")}`);
    });


    sequelize.sync({ force: false })
      .then(() => {
        console.log('connected with sequelize')
      })
      .catch(() => {
        console.log('Error connection')
      })
  }
}

const server = new Server();
server.start();
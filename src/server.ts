import express from "express";
import cors from "cors";
import { limiter } from "./shared/middlewares/rateLimiter";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import route from "./api";
import db from "./shared/db";
import config from "./config";

const startServer = async () => {
  const app = express();
  //Cors
  app.use(cors());
  //To add Headers
  app.use(helmet());
  //File Upload
  app.use(fileUpload());
  //Converts req.body to json
  app.use(express.json());
  //Rate limiter
  app.use(limiter);

  await db();
  console.log("Connection to database successful");

  app.use("/", route());
  app.listen(config.PORT, () => {
    console.log(`Server running on ${config.PORT}`);
  });
};

startServer();

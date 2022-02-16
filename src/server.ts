import express, { Request, Response } from "express";
import cors from "cors";
import { limiter } from "./shared/middlewares/rateLimiter";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import APIroute from "./api";
import db from "./shared/db";
import config from "./config";

const PORT = config.PORT || 5000;

export const startServer = async () => {
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

  app.use("/api/v1", APIroute());

  app.use("/", (req: Request, res: Response) => {
    res.send("Flow API");
  });

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

startServer();

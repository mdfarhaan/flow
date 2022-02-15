import { Router } from "express";
import { upload } from "./Upload/router";
import { download } from "./Download/router";

export default (): Router => {
  const app = Router();
  app.use("/upload", upload());
  app.use("/download", download());

  return app;
};

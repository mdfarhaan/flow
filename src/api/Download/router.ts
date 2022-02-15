import { Response, Request, Router } from "express";
import { validate } from "../../shared/middlewares/validator";
import { downloadRequestSchema } from "./schema";
import { getFileDoc } from "./controller";

export const download = (): Router => {
  const app = Router();
  app.get("/:code", validate(downloadRequestSchema), downloadHandler);
  return app;
};

const downloadHandler = async (req: Request, res: Response) => {
  const result = await getFileDoc(req.params.code);
  if (result == null) {
    res.status(200).json({ success: false, message: "Invalid Code!" });
  } else {
    res
      .status(200)
      .json({ success: true, message: "Valid Code!", data: result });
  }
};

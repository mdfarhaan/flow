import { Router, Response } from "express";
import { uploadFile } from "./controller";

export const upload = (): Router => {
  const app = Router();
  app.post("/", uploadHandler);
  return app;
};

const uploadHandler = async (req: any, res: Response) => {
  if (!req.files) {
    res.status(200).json({ success: false, message: "File not found" });
  } else {
    const result = await uploadFile(req.files.file);
    res.status(200).json({
      success: true,
      message: "File Uploaded Successfully!",
      code: result.code,
    });
  }
};

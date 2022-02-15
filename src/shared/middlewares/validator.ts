import * as yup from "yup";
import { Request, Response, NextFunction } from "express";

export function validate(schema: yup.AnyObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await schema.validate(req.params);
      req.params = data;
      next();
    } catch (err) {
      res.status(400).send({ success: false, message: err });
    }
  };
}

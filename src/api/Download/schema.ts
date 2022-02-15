import * as yup from "yup";

export const downloadRequestSchema = yup.object({
  code: yup.string().required().min(5).max(5),
});

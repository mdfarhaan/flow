import * as Yup from "yup";

export const codeSchema = Yup.string()
  .required("File Code is required!")
  .min(5, "File Code has to be of 5 characters")
  .max(5, "File Code has to be of  5 characters");

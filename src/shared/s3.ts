import AWS from "aws-sdk";
import config from "../config";

export const S3 = new AWS.S3({
  accessKeyId: config.S3AccessKey,
  secretAccessKey: config.S3SecretAccessKey,
});

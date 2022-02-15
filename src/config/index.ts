require("dotenv").config();

export default {
  PORT: 5000,
  databaseURL: process.env.DATABASE_URL,
  S3AccessKey: process.env.S3AccessKey,
  S3SecretAccessKey: process.env.S3SecretAccessKey,
};

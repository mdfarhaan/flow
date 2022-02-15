import { S3 } from "../../shared/s3";
import db from "../../shared/db";
import { fileDoc, s3Params } from "../../shared/customTypes";

export const uploadFile = async (file: any) => {
  const key = await makeID();

  const params: s3Params = {
    Bucket: "fts-test-uni",
    Key: key,
    Body: file.data,
    contentType: file.mimetype,
  };

  // //Upload file to AWS S3
  const fileUpload = await S3.upload(params).promise();

  //Add Document to MongoDB
  const fileUploaded: fileDoc = {
    fileName: file.name,
    location: fileUpload.Location,
    size: file.size,
    type: file.mimetype,
    code: key,
  };

  await addFileDoc(fileUploaded);
  await addCode(key);
  return fileUploaded;
};

const addFileDoc = async (file: fileDoc) => {
  (await db()).collection("files").insertOne(file);
};

const addCode = async (code: string) => {
  (await db()).collection("codes").insertOne({ code: code });
};

const makeID = async () => {
  const storedCodes: string[] = ["", " "];

  let cursor = (await db()).collection("codes").find();
  cursor.forEach((doc) => {
    storedCodes.push(doc.code);
  });

  let result: string = "";
  while (storedCodes.includes(result)) {
    const char: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i: number = 0; i < 5; i++) {
      result += char.charAt(Math.floor(Math.random() * 26));
    }
  }
  return result;
};

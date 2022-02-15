import db from "../../shared/db";

export const getFileDoc = async (code: string) => {
  const getFile = (await db()).collection("files");
  const doc = await getFile.findOne({ code: code });
  return doc !== null ? doc : null;
};

import axios from "axios";

export const getFile = async (code: string) => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}download/${code}`
    );
    return data.data;
  } catch (err) {
    return false;
  }
};

export const uploadFile = async (file: any) => {
  try {
    const data = await axios.post(
      `${process.env.REACT_APP_API_URL}upload`,
      file
    );
    return data.data;
  } catch (err) {
    return false;
  }
};

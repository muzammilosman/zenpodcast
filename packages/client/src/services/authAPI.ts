import axios from "axios";

export const getAccessToken = async (code: string) => {
  return await axios.get(`${process.env.ZENCAST_API}?code=${code}`);
};

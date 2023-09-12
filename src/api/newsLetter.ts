import client from "./axios-config";
import axios from "axios";

export const newsLetter = (body: { email: string }) => {
  return client.put(`/`, body);
};

import client from "./axios-config";

export const influencer = (body: { email: string; userName: string }) => {
  return client.post(`/influencer`, body);
};

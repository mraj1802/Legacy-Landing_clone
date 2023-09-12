import client from "./axios-config";

export const getVideo = async (url: string) => {
  return client.get(url);
};

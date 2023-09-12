import axios from "axios";

export const getBitCoinData = () => {
  return axios.get(`/api/v1/public/coinMarketCap`);
};

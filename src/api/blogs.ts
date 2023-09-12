import axios from "axios";
const baseUrl = "https://strapi.legacysuite.com";

const getBlogs = async () => {
  return axios.get(
    `${baseUrl}/api/allblogs?populate=*&sort[0]=id&pagination[pageSize]=1000`
  );
};

const getBlogDetail = async (id: number) => {
  return axios.get(`${baseUrl}/api/blogsdetails/${id}?populate=*`);
};

export { getBlogs, getBlogDetail };

import axios from "axios";

const baseUrl = "https://strapi.legacysuite.com";
export const getData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/case-studies?populate=*&sort=publishedAt:desc`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const getCaseStudy = async (slug: string | number) => {
  if (slug) {
    try {
      const response = await axios.get(
        `${baseUrl}/api/case-studies?filters[identifier][$eq]=${slug}&populate=components.images,thumbnail.*,bannerImage.*`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

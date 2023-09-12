import { getBlogs } from "../../src/api/blogs";
import Blogs from "../../src/elements/blogs/Blogs/Blogs";

export const revalidate = 60;

async function fetchBlogs() {
  const blogs: any = await getBlogs();
  return blogs;
}

export default async function Index() {
  const blogs = await fetchBlogs();
  blogs.data.data.forEach((data: any) => {
    data.data = {
      title: data?.attributes?.title,
      description: data?.attributes?.description,
      banner: data?.attributes?.Previewbanner?.data?.attributes?.url,
      previewBanner: data?.attributes?.Previewbanner?.data?.attributes?.url,
      date: data?.attributes?.date,
      keywords: data?.attributes?.keywords?.data.map(
        (data: any) => data?.attributes?.keywords
      ),
      id: data?.attributes?.blogsdetail?.data?.id,
    };
    data.filePath = data.attributes.filepath;
    data.attributes = null;
  });

  return (
    <div>
      <Blogs data={blogs?.data?.data} />
    </div>
  );
}

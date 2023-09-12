import { getBlogDetail } from "../../../src/api/blogs";
import BlogDetail from "../../../src/elements/blogs/BlogDetail/BlogDetail";

async function fetchData(params: any) {
  const blogDetail = getBlogDetail(params);
  return blogDetail;
}
export default async function Index({ params }: { params: any }) {
  const blogData = await fetchData(params.slug);
  const frontMatter = {
    title: blogData?.data?.data?.attributes?.allblog?.data?.attributes?.title,
    banner: blogData?.data?.data?.attributes?.banner?.data[0]?.attributes?.url,
  };

  return (
    <div>
      {
        <BlogDetail
          source={blogData.data.data.attributes.slices[0].Content}
          frontMatter={frontMatter}
          forBlogs={true}
          keywords={blogData.data.data.attributes.keywords.data}
        />
      }
    </div>
  );
}

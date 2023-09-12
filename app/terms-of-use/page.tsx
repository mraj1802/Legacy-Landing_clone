import fs from "fs";
import graymatter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import termsOfUseSidebarData from "../../content/termsOfUse.json";
import PDFToHTMLConversion from "../../src/elements/resources/PdfPage/PdfPageTemplate";

async function getTerms() {
  const directory = path.join(process.cwd(), "content");
  const file = path.join(directory, "termsOfUse.mdx");
  console.log(file);
  const source = fs.readFileSync(file);

  const { content, data } = graymatter(source);
  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    mdx: mdxSource,
  };
}

export default async function Index() {
  const { mdx } = await getTerms();
  return (
    <div>
      <PDFToHTMLConversion
        mdx={mdx}
        sidebarData={termsOfUseSidebarData}
        heading="Our"
        boldText="Terms of Use"
        text="Effective March 31, 2022"
      />
    </div>
  );
}

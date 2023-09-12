import fs from "fs";
import graymatter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import glossary from "../../content/glossary.json";
import PDFToHTMLConversion from "../../src/elements/resources/PdfPage/PdfPageTemplate";

async function getGlossary() {
  const directory = path.join(process.cwd(), "content");
  const file = path.join(directory, "glossary.mdx");
  const fileData = await fs.readFileSync(file, "utf8");

  const { content, data } = graymatter(fileData);
  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    mdx: mdxSource,
  };
}

export default async function Index() {
  const { mdx } = await getGlossary();
  return (
    <div>
      <PDFToHTMLConversion
        mdx={mdx}
        heading="Glossary"
        sidebarData={glossary}
      />
    </div>
  );
}

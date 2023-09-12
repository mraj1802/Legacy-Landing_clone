import fs from "fs";
import graymatter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import privacyPolicySidebarData from "../../content/privacyPolicy.json";
import PDFToHTMLConversion from "../../src/elements/resources/PdfPage/PdfPageTemplate";

async function getPrivacy() {
  const directory = path.join(process.cwd(), "content");
  const file = path.join(directory, "privacyPolicy.mdx");
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
  const { mdx } = await getPrivacy();
  return (
    <div>
      <PDFToHTMLConversion
        mdx={mdx}
        sidebarData={privacyPolicySidebarData}
        heading="Our"
        boldText=" Privacy Policy"
        text="Last Updated September 10, 2022"
      />
    </div>
  );
}

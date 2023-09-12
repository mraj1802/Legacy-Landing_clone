import { GetServerSideProps } from "next";
import { blogFilePaths } from "../src/utils/mdx";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "https://legacysuite.com";

function generateSiteMap(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
  <loc>https://www.legacysuite.com/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>1.00</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/crypto/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/legacy-pass/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/legal-suite/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/legacy-suite/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/financial-suite/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/digital-suite/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/security/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/nft-museum/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/feeling-lost/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/end-of-life-guru/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/about/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/faqs/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/blogs/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/terms-of-use/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/privacy-policy/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>


<url>
  <loc>https://www.legacysuite.com/glossary/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/contact/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

<url>
  <loc>https://www.legacysuite.com/pricing/</loc>
  <lastmod>2022-12-15T04:46:57+00:00</lastmod>
  <priority>0.80</priority>
</url>

    ${posts
      .map(
        (data: any) => `
      <url>
          <loc>${`${EXTERNAL_DATA_URL}/${data.replace(/\.mdx?$/, "")}`}</loc>
          <lastmod>2022-08-29T13:19:14+00:00</lastmod>
          <priority>0.80</priority>
      </url>
    `
      )
      .join("")}
  </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We make an API call to gather the URLs for our site

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blogFilePaths);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;

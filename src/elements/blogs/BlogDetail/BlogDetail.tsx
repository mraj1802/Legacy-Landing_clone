"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Profile from "../../../components/Profile/Profile";
import BlogDetailHero from "../BlogDetailHero/BlogDetailHero";
import Mdx from "../Mdx/Mdx";
import classes from "./BlogDetail.module.css";
import icon from "/public/blogs/icon.svg";
import syed from "/public/blogs/syed.svg";
import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import isBrowser from "../../../utils/isBrowser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const config: any = {
  toolbar: [],
};

const BlogDetail = ({
  source,
  frontMatter,
  forBlogs = false,
  // headings,
  keywords,
}: {
  source: any;
  frontMatter?: any;
  forBlogs: boolean;
  // headings?: any;
  keywords: any;
}) => {
  const [visibleHeading, setVisibleHeading] = React.useState<string>("");
  const [headings, setHeadings] = React.useState<any[]>([]);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = () => {
    const elements = document.querySelectorAll("h2");
    const visibleElement: any = Array.from(elements).find((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
    if (visibleElement) {
      setVisibleHeading(visibleElement.textContent);
    }
  };

  React.useEffect(() => {
    setHeadings([]);
    if (source) {
      const htmlCode = new DOMParser().parseFromString(source, "text/html");

      const h1Tags = htmlCode.querySelectorAll("h1");

      h1Tags.forEach((element: any) => {
        element = element.textContent;

        setHeadings((headings) => [...headings, element]);
      });
    }
  }, [source]);
  const handleClick = (name: string) => {
    const elements = document.querySelectorAll("h2");
    elements.forEach((h2Element) => {
      const innerTextWithoutSpaces = h2Element.innerText.trim();
      if (innerTextWithoutSpaces == name.trim()) {
        h2Element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    });
  };

  isBrowser() && window.addEventListener("scroll", handleScroll);

  return (
    <Box>
      <Navbar />
      <BlogDetailHero
        heading={frontMatter?.title}
        bannerImage={frontMatter?.banner}
      />

      <Container>
        <Box
          sx={{ marginTop: "42px", marginBottom: "30px" }}
          className={forBlogs ? classes.container : ""}
        >
          <Box className={forBlogs ? classes.mdxContainer : ""}>
            <CKEditor
              editor={ClassicEditor}
              data={source}
              config={config}
              disabled={true}
            />
          </Box>
          {forBlogs && (
            <Box className={classes.section}>
              {frontMatter?.title === "What Is legacy?" ? (
                <Profile image={icon} name="Legacy Suite" />
              ) : (
                <Profile image={syed} name="Syed Arslan Shahid Bukhari" />
              )}
              <Typography variant="body1" color="disabled.main" mt="20px">
                {keywords.length ? "Related Tags:" : ""}
              </Typography>
              <Box className={classes.tagContainer}>
                {keywords?.map((data: any, index: number) => (
                  <Box
                    className={classes.tag}
                    sx={{ backgroundColor: "secondary.main" }}
                    key={index}
                  >
                    <Typography variant="caption">
                      {data.attributes.keywords}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  color="neutral.main"
                  className={classes.line}
                  pr="10px"
                  mt="20px"
                >
                  {headings.length ? "Table Of Contents" : ""}
                </Typography>
                {headings.map((data: any, index: number) => {
                  return (
                    <Typography
                      variant="body1"
                      key={index}
                      component="p"
                      mt="10px"
                      onClick={() => {
                        handleClick(data);
                      }}
                      sx={{
                        color: `${
                          visibleHeading == data
                            ? "primary.dark"
                            : "neutral.main"
                        }`,
                        "&:hover": { color: "primary.dark", cursor: "pointer" },
                      }}
                    >
                      {data}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogDetail;

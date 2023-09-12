import React, { useState, useEffect } from "react";
import styles from "./CaseStudyContent.module.css";
import "./CaseStudyContent.module.css";
import Text from "../text/text";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Profile from "../../../components/Profile/Profile";
import syed from "/public/blogs/syed.svg";
import {
  DataProps,
  HeadingStateProps,
} from "../../../interfaces/elements/case-studies/caseStudies";

const CaseStudyContent = ({ data }: { data: DataProps[] }) => {
  const [headings, setHeadings] = useState<HeadingStateProps[]>([]);
  const [visibleElementId, setVisibleElementId] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const elements = document.querySelectorAll("h2");
    const visibleElement: any = Array.from(elements).find((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
    if (visibleElement) {
      setVisibleElementId(visibleElement.textContent);
    }
  };
  useEffect(() => {
    setHeadings([]);
    if (data) {
      data.forEach((e: any) => {
        if (e.__component === "content-block.paragraph-block") {
          const htmlCode = new DOMParser().parseFromString(
            e.content,
            "text/html"
          );
          console.log(e.content);
          const h1Tags = htmlCode.querySelectorAll("h2");
          // console.log(h1Tags);
          h1Tags.forEach((element: any, index: any) => {
            element = element.textContent;

            setHeadings((headings) => [...headings, element]);
          });
        }
      });
    }
    // console.log(headings);
  }, []);

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

  return (
    <Box
      sx={{
        width: "95vw",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        gap: "25px",
        margin: "20px auto",
      }}
    >
      <Box className={styles.container} id="id">
        <Profile image={syed} name="Syed Arslan Shahid Bukhari" />
        {headings.length ? (
          <Typography
            variant="body1"
            color="neutral.main"
            className={styles.line}
            pr="10px"
            mt="20px"
          >
            Table Of Contents
          </Typography>
        ) : (
          ""
        )}
        {headings.map((heading: any, index: number) => {
          // console.log(headings);
          return (
            <Box key={index} onClick={() => handleClick(heading)}>
              <Typography
                variant="body1"
                className="titles"
                component={`${visibleElementId == heading ? "h3" : "h4"}`}
                color={`${visibleElementId == heading ? "#0C4088" : "#8C8C8C"}`}
                sx={{ cursor: "pointer" }}
              >
                {heading}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ maxWidth: "800px" }}>
        {data?.map((block: string | any, index: number) => (
          <Box key={index}>
            {block.__component === "content-block.paragraph-block" && (
              <Text paragraph={block} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CaseStudyContent;

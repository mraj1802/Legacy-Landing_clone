"use client";
import * as React from "react";
import NonNestedItems from "./NonNestedItems";
import NestedItems from "./NestedItems";
import List from "@mui/material/List";
import { Container, Typography, useTheme } from "@mui/material";
import styles from "./PdfPageTemplate.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import Mdx from "../../blogs/Mdx/Mdx";
import BlogDetailHero from "../../blogs/BlogDetailHero/BlogDetailHero";
import Footer from "../../../components/Footer/Footer";
import ResourcesHero from "../../../components/ResourcesHero/ResourcesHero";
import image from "/public/resources/hero.webp";

const PDFToHTMLConversion = ({
  mdx,
  sidebarData,
  heading,
  boldText,
  text,
}: {
  heading: string;
  mdx: any;
  sidebarData: any;
  boldText?: string;
  text?: string;
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const theme = useTheme();
  const boldStyle: React.CSSProperties = {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textTransform: "uppercase",
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar />

      <ResourcesHero
        image={image}
        heading={
          <Typography
            component="h2"
            variant="h2"
            color={"neutral.lighter"}
            fontWeight="700"
          >
            {heading}
            <span style={{ ...boldStyle }}> {boldText}</span>
          </Typography>
        }
        text={text}
      />

      <div className={styles.row}>
        <div className={styles.column1}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={styles.list}
          >
            <Container>
              {sidebarData?.map((obj: any, index: number) => {
                const mainHeading: any = Object.keys(obj)[0];
                const mainObject: any = Object.values(obj)[0];
                const mainURL: any = Object.values(mainObject)[0];
                const nested: any = Object.values(mainObject)[1];
                const isNested: any = nested.length === 0 ? false : true;
                const nestedTabs = isNested
                  ? Object.values(mainObject)[1]
                  : null;

                if (!isNested)
                  return (
                    <NonNestedItems
                      index={index}
                      mainHeading={mainHeading}
                      mainURL={mainURL}
                      setIndex={setSelectedIndex}
                      selectedIndex={selectedIndex}
                    />
                  );
                else {
                  return (
                    <NestedItems
                      key={index}
                      index={index}
                      nestedTabs={nestedTabs}
                      mainHeading={mainHeading}
                      setIndex={setSelectedIndex}
                      selectedIndex={selectedIndex}
                    />
                  );
                }
              })}
            </Container>
          </List>
        </div>
        <div className={styles.column2}>
          <Mdx source={mdx} sx={{ margin: 0 }} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PDFToHTMLConversion;

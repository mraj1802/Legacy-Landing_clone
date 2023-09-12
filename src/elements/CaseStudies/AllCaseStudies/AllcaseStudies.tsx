"use client";
import React, { useState } from "react";
import { Box, Container, useTheme, Typography } from "@mui/material";
import Navbar from "../../../components/Navbar/Navbar";
import ResourcesHero from "../../../components/ResourcesHero/ResourcesHero";
import caseStudies from "/public/caseStudies/hero.png";
import styles from "./AllCaseStudies.module.css";
import Footer from "../../../components/Footer/Footer";
import BlogLegacyCard from "../../blogs/BlogLegacyCard/BlogLegacyCard";
import BlogCard from "../../blogs/BlogCard/BlogCard";
import { DataProps } from "../../../interfaces/elements/case-studies/caseStudies";
import BlogTags from "../../blogs/BlogTags/BlogTags";

const AllCaseStudiesPage = ({ data }: { data: DataProps[] }) => {
  const theme = useTheme();
  const boldStyle = { color: theme.palette.secondary.main, fontWeight: "700" };
  const [allCaseStudies, setAllCaseStudies] = useState(data);

  return (
    <Box>
      <Navbar />

      <ResourcesHero
        heading={
          <Typography variant="h1" color={theme.palette.neutral.lighter}>
            Leagcy Suite
            <span style={{ ...boldStyle }}> Case Studies</span>
          </Typography>
        }
        image={caseStudies}
        text="Wait a minute. It’s not about engagement. It’s about legacy enlightenment. The more you know, the more fascinated you will be."
      />
      {/* <BlogTags selected={selected} handleSelected={handleSelected} /> */}
      <Box className={styles.bannerContainer}>
        {[allCaseStudies?.[0]].map((data: any, index) => (
          <Box
            key={index}
            className={styles.lagecyBlogCard}
            // sx={{ maxWidth: "900px" }}
          >
            <BlogLegacyCard
              heading={data?.attributes.title}
              width={"1140px"}
              date={new Date(data?.attributes?.publishedAt).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
              text={data?.attributes?.description}
              blogLink={"case-studies/" + data?.attributes.identifier}
              image={data?.attributes?.thumbnail?.data?.attributes?.url}
            />
          </Box>
        ))}
      </Box>
      <Box>
        <Container>
          <Box className={styles.container}>
            {allCaseStudies?.map((data: any, index: number) =>
              index ? (
                <Box
                  key={index}
                  className={index % 9 < 7 ? styles.card2 : styles.card}
                  // sx={{ display: index % 8<6 === "none" ? "none" : "block" }}
                >
                  <BlogCard
                    tags={[]}
                    date={new Date(
                      data?.attributes?.publishedAt
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                    heading={data?.attributes.title}
                    image={data?.attributes?.thumbnail?.data?.attributes?.url}
                    width={index % 9 < 7 ? "360px" : "555px"}
                    blogLink={"case-studies/" + data?.attributes.identifier}
                  />
                </Box>
              ) : (
                ""
              )
            )}
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default AllCaseStudiesPage;

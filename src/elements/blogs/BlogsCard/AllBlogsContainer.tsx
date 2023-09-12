"use client";
import { Box, Container } from "@mui/material";
import { IBlogsProps } from "../../../interfaces/elements/blogs/blogs.";
import BlogCard from "../BlogCard/BlogCard";
import classes from "./AllBlogsContainer.module.css";
import * as React from "react";

const AllBlogsContainer = ({ data }: IBlogsProps) => {
  let largeCard = (index: number) => {
    if (index === 0) {
      return "none";
    }

    let digit: number = index;
    if (
      digit === 7 ||
      digit === 8 ||
      digit === 15 ||
      digit === 16 ||
      digit === 23 ||
      digit === 24 ||
      digit === 31 ||
      digit === 32
    ) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <Box>
      <Container>
        <Box className={classes.container}>
          {data?.map(({ data, id }: any, index) => (
            <Box
              key={index}
              className={largeCard(index) ? classes.card2 : classes.card}
              sx={{ display: largeCard(index) === "none" ? "none" : "block" }}
            >
              <BlogCard
                tags={data?.keywords?.length ? data?.keywords : []}
                date={data.date}
                heading={data.title}
                text={data.description}
                image={data.previewBanner}
                width={largeCard(index) ? "360px" : "555px"}
                blogLink={"/blogs/" + data.id}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AllBlogsContainer;

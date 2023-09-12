"use client";
import { Box, Typography, useTheme } from "@mui/material";
import * as React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import ResourcesHero from "../../../components/ResourcesHero/ResourcesHero";
import { IBlogsProps } from "../../../interfaces/elements/blogs/blogs.";
import {
  findSelectedBlogs,
  tagsGeneration,
} from "../../../utils/blogTagsUtils";
import BlogLegacyCard from "../BlogLegacyCard/BlogLegacyCard";
import AllBlogsContainer from "../BlogsCard/AllBlogsContainer";
import BlogTags from "../BlogTags/BlogTags";
import classes from "./Blogs.module.css";
import blogs from "/public/blogs/hero.webp";

const Blogs = ({ data }: IBlogsProps) => {
  const theme = useTheme();
  const effectBehaviour = React.useRef(false);
  const boldStyle = { color: theme.palette.secondary.main, fontWeight: "700" };
  const [selected, setSelected] = React.useState([
    { id: "all", selected: true, tag: "All" },
  ]);
  const [blogData, setBlogData] = React.useState(data);

  let largeCard = (index: number) => {
    let digit = index % 10;
    if (digit === 0 || digit === 1 || digit === 5 || digit === 6) {
      return true;
    } else {
      return false;
    }
  };
  const handleSelected = (id: number | string) => {
    if (id === "all") {
      // check status of all
      let checkStatus: any = selected?.map((elem) => {
        if (elem.id === "all") {
          return elem.selected;
        }
      });
      // if checkstatus is false mean he is selecting all then make all selection false and setData equal to initial data
      if (!checkStatus[0]) {
        const tags = tagsGeneration(data);
        const all: any = [{ id: "all", selected: true, tag: "All" }];
        setSelected([...all, ...tags]);
        setBlogData(findSelectedBlogs([...data], selected, true));
      }
    } else {
      const selectedCopy = [...selected];
      // Unselect the all
      selectedCopy.forEach((elem) => {
        if (elem.id === "all") {
          elem.selected = false;
        }
      });
      selectedCopy.forEach((elem) => {
        if (elem.id === id) {
          elem.selected = !elem.selected;
        }
      });
      setSelected(selectedCopy);
      setBlogData(findSelectedBlogs([...data], selected, false));
    }
  };
  React.useEffect(() => {
    if (effectBehaviour.current) return;
    effectBehaviour.current = true;
    const tags = tagsGeneration(data);
    setSelected((prev) => [...prev, ...tags]);
  }, [data]);
  return (
    <Box>
      <Navbar />
      <ResourcesHero
        heading={
          <Typography variant="h1" color={theme.palette.neutral.lighter}>
            Taking the mystery out of
            <span style={{ ...boldStyle }}> DIGITIZED MYTHS!</span>
          </Typography>
        }
        image={blogs}
        text="Wait a minute. It’s not about engagement. It’s about legacy enlightenment. The more you know, the more fascinated you will be."
      />
      <BlogTags selected={selected} handleSelected={handleSelected} />

      <Box className={classes.container}>
        {[blogData?.[0]].map((data, index) => (
          <Box key={index} className={classes.card}>
            <BlogLegacyCard
              tags={data?.data?.keywords?.length ? data?.data?.keywords : []}
              date={data?.data.date}
              heading={data?.data.title}
              text={data?.data.description}
              image={data?.data.previewBanner}
              width={largeCard(index) ? "1140px" : "1140px"}
              blogLink={"/blogs/" + data.data.id}
            />
          </Box>
        ))}
      </Box>
      <AllBlogsContainer data={blogData} />
      <Footer />
    </Box>
  );
};

export default Blogs;

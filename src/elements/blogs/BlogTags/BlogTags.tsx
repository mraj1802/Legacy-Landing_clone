import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import * as React from "react";
import BlogTagCard from "../BlogTagCard/BlogTagCard";
import classes from "./BlogTags.module.css";

interface ISelected {
  id: string | number;
  tag: string;
  selected: boolean;
}
interface IBlogsTagsProps {
  selected: Array<ISelected>;
  handleSelected: (id: string | number) => any;
}
const BlogTags = ({ selected, handleSelected }: IBlogsTagsProps) => {
  const [hideRightArrow, setHideRightArrow] = React.useState(false);
  const [hideLeftArrow, setHideLeftArrow] = React.useState(true);

  const handleRightClick = () => {
    let tagScroller = document.getElementById(
      "blogsBtnContainer"
    ) as HTMLInputElement;
    tagScroller.scrollBy(100, 0);
    let totalScrollWidth: number = tagScroller?.scrollWidth;
    let presentScrollWidth: number =
      tagScroller?.offsetWidth + tagScroller?.scrollLeft;
    if (totalScrollWidth === presentScrollWidth) {
      setHideRightArrow(true);
      setHideLeftArrow(false);
    } else {
      setHideRightArrow(false);
      setHideLeftArrow(false);
    }
  };
  const handleLeftClick = () => {
    let tagScroller = document.getElementById(
      "blogsBtnContainer"
    ) as HTMLInputElement;
    tagScroller.scrollBy(-100, 0);
    let presentScrollWidth: number = tagScroller.scrollLeft;
    if (presentScrollWidth === 0) {
      setHideLeftArrow(true);
      setHideRightArrow(false);
    } else {
      setHideLeftArrow(false);
      setHideRightArrow(false);
    }
  };
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.btnContainer} id="blogsBtnContainer">
          {selected.map(({ tag, selected, id }, index) => (
            <BlogTagCard
              tag={tag}
              selected={selected}
              key={index}
              id={id}
              handleSelected={handleSelected}
            />
          ))}
        </Box>
      </Box>
      <Box className={classes.tagsButtonContainer}>
        <Box
          onClick={handleLeftClick}
          sx={{ display: hideLeftArrow ? "none !important" : "block" }}
          className={classes.btnLeft}
        >
          <ArrowBackIcon />
        </Box>
        <Box
          onClick={handleRightClick}
          sx={{ display: hideRightArrow ? "none !important" : "block" }}
          className={classes.btnRight}
        >
          <ArrowForwardIcon />
        </Box>
      </Box>
    </>
  );
};

export default BlogTags;

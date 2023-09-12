import { Box, Typography } from "@mui/material";
import classes from "./BlogTagCard.module.css";

const BlogTagCard = ({
  tag,
  selected,
  id,
  handleSelected,
}: {
  tag: string;
  selected: boolean;
  id: number | string;
  handleSelected: (id: number | string) => any;
}) => {
  return (
    <>
      <Box
        className={`${classes.btn} ${selected && classes.selected}`}
        onClick={() => {
          handleSelected(id);
        }}
      >
        <Typography
          variant="caption"
          fontWeight="600"
          color={"primary.dark"}
          sx={{ textTransform: "uppercase" }}
        >
          {tag}
        </Typography>
      </Box>
    </>
  );
};

export default BlogTagCard;

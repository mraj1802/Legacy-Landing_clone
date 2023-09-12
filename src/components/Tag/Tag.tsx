import { Typography, Box } from "@mui/material";
import * as React from "react";
import Fade from "../../elements/Animation/Fade/Fade";

const Tag = ({ text }: { text?: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: "neutral.lighter",
        padding: "42px 0px",
        position: "relative",
        zIndex: "6",
      }}
    >
      <Fade>
        <Typography
          color={"primary.dark"}
          variant="h2"
          component="h2"
          textAlign={"center"}
          fontWeight="700"
        >
          {text}
        </Typography>
      </Fade>
    </Box>
  );
};

export default Tag;

import { Box, Container, Typography } from "@mui/material";
import classes from "./BlogDetailHero.module.css";

const BlogDetailHero = ({
  bannerImage,
  heading,
  opacity = 0.6,
}: {
  heading: string;
  bannerImage: string;
  opacity?: number;
}) => {
  return (
    <Box sx={{ height: "40vh" }}>
      <Box className={classes.mainContainer}>
        <Box
          className={classes.container}
          sx={{
            background: `url(${bannerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity,
          }}
        />

        <Container className={classes.heading}>
          <Typography
            variant="h1"
            component="h1"
            color="white"
            fontWeight="700"
          >
            {heading}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogDetailHero;

import * as React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import classes from "./BlogLegacyCard.module.css";

const BlogLegacyCard = ({
  tags,
  date,
  heading,
  text,
  image,
  width = "620px",
  blogLink = "#",
}: {
  tags?: string[];
  date?: string;
  heading: string;
  text?: string;
  image?: string | any;
  width: string;
  blogLink?: string;
}) => {
  const theme = useTheme();
  return (
    <Container>
      <Link href={blogLink}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            alignItems: { lg: "inherit", md: "center", xs: "center" },
          }}
        >
          <Box
            sx={{ height: "390px", maxWidth: "1140px" }}
            className={classes.container}
          >
            <Box
              className={classes.imageBackground}
              sx={{ height: "390px", maxWidth: "1140px" }}
            >
              {Boolean(image) && (
                <div
                  style={{
                    position: "relative",
                    width: width,
                    height: "390px",
                  }}
                  className={classes.imageContainer}
                >
                  <Image
                    alt={heading}
                    layout="fill"
                    src={image}
                    className={classes.image}
                  />
                </div>
              )}
            </Box>
            <Box className={classes.text}>
              <Box className={classes.btnContainer}>
                {tags?.map((data, index) => {
                  return (
                    <Box key={index} className={classes.btn}>
                      <Typography
                        variant="caption"
                        color={theme.palette.primary.dark}
                      >
                        {data}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              <Typography
                variant="p"
                color={theme.palette.neutral.lighter}
                className={classes.date}
                component="p"
              >
                {date}
              </Typography>

              <Typography
                variant="h3"
                color={theme.palette.neutral.lighter}
                component="p"
                className={classes.heading}
                sx={{
                  cursor: "pointer",
                }}
              >
                {heading}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={"400"}
                color={theme.palette.neutral.lighter}
                component="p"
                className={classes.paragraph}
              >
                {text}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </Container>
  );
};

export default BlogLegacyCard;

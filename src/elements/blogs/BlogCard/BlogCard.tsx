import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import classes from "./BlogCard.module.css";

const BlogCard = ({
  tags,
  date,
  heading,
  text,
  image,
  width,
  blogLink,
}: {
  tags: string[];
  date?: string;
  heading: string;
  text?: string;
  image?: string | any;
  width: string;
  blogLink?: string | any;
}) => {
  const isMatch = useMediaQuery("(max-width:1350px)");
  const theme = useTheme();
  return (
    <Link href={blogLink}>
      <Box className={classes.mainContainer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            alignItems: { lg: "inherit", md: "center", xs: "center" },
          }}
        >
          <Box
            sx={{
              height: "238px",
              maxWidth: width,
            }}
            className={classes.container}
          >
            <Box
              className={classes.imageBackground}
              sx={{
                height: "238px",
                maxWidth: isMatch ? "400px" : width,
                "@media (max-width: 1350px)": { maxWidth: "555px" },
              }}
            >
              {Boolean(image) && (
                <div
                  style={{
                    position: "relative",
                    width: width,
                    height: "238px",
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
                {tags.length > 2
                  ? tags?.slice(1).map((data, index) => {
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
                    })
                  : tags?.map((data, index) => {
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
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="caption"
            color={theme.palette.primary.dark}
            fontWeight="600"
            mt="22px"
          >
            {date}
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.primary.dark}
            fontWeight="700"
            mt={"12px"}
          >
            {heading}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default BlogCard;

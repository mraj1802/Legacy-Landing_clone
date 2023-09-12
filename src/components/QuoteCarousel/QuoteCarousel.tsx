import { KeyboardArrowRight } from "@mui/icons-material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import classes from "./QuoteCarousel.module.css";
import quoteDataAll from "./QuoteData";

interface IQuoteData {
  id: number;
  text: string;
  author: string;
}
interface IQuoteProps {
  quoteData?: Array<IQuoteData>;
  forMarketing?: boolean;
}

const QuoteCarousel = ({ quoteData, forMarketing = false }: IQuoteProps) => {
  const [active, setActive] = React.useState(1);
  const theme = useTheme();
  let data = quoteData ? quoteData : quoteDataAll;
  const handleNext = () => {
    if (active === data.length) {
      setActive(1);
      return;
    }
    setActive(active + 1);
  };
  const handleBack = () => {
    if (active === 1) {
      setActive(data.length);
      return;
    }
    setActive(active - 1);
  };
  return (
    <>
      <Box className={`${classes.root} ${forMarketing && classes.background}`}>
        <Container>
          <Box className={classes.container}>
            <Typography
              color={
                forMarketing
                  ? theme.palette.neutral.lighter
                  : theme.palette.primary.dark
              }
              variant="h2"
              component="h2"
              className={classes.mainHeading}
            >
              What People Think?
            </Typography>
            <Typography
              color={
                forMarketing
                  ? theme.palette.neutral.lighter
                  : theme.palette.primary.dark
              }
              variant="h4"
              className={classes.paragraph}
            >
              Don’t take our word for it
            </Typography>
            {data.map(({ id, text, author }, index) => (
              <Box key={id}>
                {active === id && (
                  <Box>
                    <Typography
                      color={
                        forMarketing
                          ? theme.palette.neutral.lighter
                          : theme.palette.primary.dark
                      }
                      variant="h3"
                      component="h3"
                      className={classes.quote}
                    >
                      &quot;{text}&quot;
                    </Typography>
                    <Typography
                      color={
                        forMarketing
                          ? theme.palette.neutral.lighter
                          : theme.palette.primary.dark
                      }
                      variant="body1"
                      component="h5"
                      className={classes.author}
                    >
                      {author}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
            <Box className={classes.btnContainer}>
              <Box
                className={`${
                  forMarketing
                    ? classes.iconContainerWhite
                    : classes.iconContainer
                }`}
                onClick={handleBack}
              >
                <KeyboardArrowLeftIcon className={classes.icon} />
              </Box>
              <Box
                className={`${
                  forMarketing
                    ? classes.iconContainerWhite
                    : classes.iconContainer
                }`}
                onClick={handleNext}
              >
                <KeyboardArrowRight className={classes.icon} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default QuoteCarousel;

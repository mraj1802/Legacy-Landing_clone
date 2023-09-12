import { Box, Typography, useTheme } from "@mui/material";
import classes from "./InsuranceCard.module.css";

const InsuranceCard = ({
  state = false,
  number,
  text,
  id = 1,
  setState,
  handleClick,
  heading,
  paragraph,
}: {
  state: boolean | number;
  text: string;
  id: number;
  setState(id: number): any;
  handleClick(id: number, paragraph: string): any;
  heading?: string;
  paragraph: string;
  number: number;
}) => {
  const theme = useTheme();
  return (
    <>
      <Box
        className={classes.root}
        sx={{
          backgroundColor:
            state === id
              ? theme.palette.secondary.main
              : theme.palette.neutral.lighter,
        }}
        onClick={() => {
          handleClick(id, paragraph);
          setState(id);
        }}
      >
        {state === id ? (
          <>
            <Typography
              variant="h3"
              component="h5"
              fontWeight="700"
              color={theme.palette.primary.dark}
            >
              {number < 10 ? `0${number}` : number}
            </Typography>
            <Typography
              variant="caption"
              component="h4"
              color={theme.palette.primary.dark}
              fontWeight="400"
              className={classes.text}
            >
              {text}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant="h3"
              component="h5"
              color={theme.palette.primary.dark}
              fontWeight="700"
            >
              <em>{number < 10 ? `0${number}` : number}</em>
            </Typography>
            <Typography
              variant="caption"
              component="h4"
              color={theme.palette.primary.dark}
              fontWeight="400"
              className={classes.text}
            >
              {text}
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default InsuranceCard;

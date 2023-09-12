import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box, Typography, useTheme } from "@mui/material";
import { IData } from "../../interfaces/elements/DosAndDontsData/dosAndDontsData";
import classes from "./DosAndDontsCard.module.css";

const DosAndDontsCard = ({
  text,
  data,
}: {
  text: string;
  data: Array<IData>;
}) => {
  const theme = useTheme();
  return (
    <Box
      className={classes.root}
      sx={{ backgroundColor: theme.palette.neutral.light }}
    >
      <Typography
        variant="h2"
        color={theme.palette.primary.dark}
        component="h2"
        fontWeight={"700"}
        mt="72"
      >
        {text}
      </Typography>
      {data.map((elem, index: number) => {
        return (
          <Box className={classes.textContainer} key={index}>
            <Box
              sx={{
                color:
                  text === "Do's"
                    ? theme.palette.success.dark
                    : theme.palette.error.main,
              }}
            >
              {elem.type === "tick" ? (
                <CheckCircleRoundedIcon />
              ) : elem.type === "cross" ? (
                <CancelRoundedIcon />
              ) : (
                <ArrowForwardRoundedIcon />
              )}
            </Box>
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight="400"
              component="p"
            >
              {elem.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default DosAndDontsCard;

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import classes from "./ThankYou.module.css";
import statue from "/public/thankYou/statue.svg";
import text from "/public/thankYou/text.svg";
import CancelIcon from "@mui/icons-material/Cancel";
import CustomButton from "../CustomButton/CustomButton";
import ReactConfetti from "react-confetti";
import isBrowser from "../../utils/isBrowser";
import useWindowSize from "../../hooks/useWindowSize";

const ThankYou = ({
  open,
  setOpen,
}: {
  open?: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { width, height } = useWindowSize();
  const [recycle, setRecycle] = React.useState(true);
  const timeoutRef = React.useRef(null);
  const handleClick = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setRecycle(false);
    }, 8000);
  }, []);
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <section className={classes.first}>
          <Box className={classes.animateContainer}>
            <Box className={classes.image}>
              <Image src={text} alt="statue" quality={100} priority />
            </Box>
            <Box className={classes.statue}>
              <Image src={statue} alt="statue" quality={100} priority />
            </Box>
          </Box>
          <Box className={classes.cross} onClick={handleClick}>
            <CancelIcon />
          </Box>
        </section>
        {isBrowser() && window.innerWidth && (
          <ReactConfetti
            width={width}
            height={height}
            tweenDuration={1000}
            recycle={recycle}
          />
        )}
        <section className={classes.second}>
          <Typography
            variant="h4"
            color="primary.dark"
            textAlign="center"
            mt="50px"
            fontWeight="700"
          >
            Thank You!
          </Typography>
          <Typography
            variant="caption"
            color="primary.dark"
            textAlign="center"
            mt="16px"
            fontWeight="600"
          >
            Thanks for submitting the form. A LegacySuite representative will be
            in touch soon.
          </Typography>
          <Box sx={{ textAlign: "center", mt: "22px", mb: "50px" }}>
            <a href="https://app.legacysuite.com">
              <CustomButton variant="secondary">
                Explore Legacy Suite
              </CustomButton>
            </a>
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default ThankYou;

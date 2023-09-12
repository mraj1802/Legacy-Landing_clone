import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./ScrollToTop.module.css";
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.top_to_btm}>
      {showTopBtn && (
        <Box onClick={goToTop}>
          <CustomButton
            style={{
              display: "none",
            }}
            variant="primary"
            className={`${classes.icon_position} ${classes.icon_style}`}
          >
            <ArrowUpwardSharpIcon />
          </CustomButton>
        </Box>
      )}
    </div>
  );
};
export default ScrollToTop;

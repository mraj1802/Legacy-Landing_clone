import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { stubFalse } from "lodash";
import * as React from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import classes from "./Fade.module.css";

const Fade = ({
  children,
  left = false,
}: {
  children: React.ReactNode;
  left?: boolean;
}) => {
  const [ref, { entry }] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "30px",
  });
  const [state, setState] = React.useState(false);
  const isMatch = useMediaQuery("(max-width:1800px)");
  const removeAnimation = useMediaQuery("(max-width:900px)");
  React.useEffect(() => {
    entry?.isIntersecting ? setState(true) : setState(false);
  }, [entry]);

  return (
    <>
      {!removeAnimation ? (
        <Box sx={{ overflow: "hidden" }}>
          <Box
            ref={ref}
            className={`${
              !isMatch && (left ? classes.containerLeft : classes.container)
            } ${state ? `${classes.show}` : ""}`}
          >
            {children}
          </Box>
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Fade;

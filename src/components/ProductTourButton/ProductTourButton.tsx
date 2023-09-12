import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import ProductTour from "../ProductTour/ProductTour";
import classes from "./ProductTourButton.module.css";
import send from "/public/icon/send.svg";

const ProductTourButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.productTour} onClick={handleOpen}>
        <Box mt="5px">
          <Image src={send} alt="send" />
        </Box>
        <Typography
          component="p"
          variant="caption"
          color="neutral.lighter"
          textAlign="center"
        >
          PRODUCT TOUR
        </Typography>
      </Box>
      <Modal open={open}>
        <ProductTour setOpen={setOpen} />
      </Modal>
    </Box>
  );
};

export default ProductTourButton;

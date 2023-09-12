import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import ProductTourCard from "../ProductTourCard/ProductTourCard";
import ProductTourVideoModal from "../ProductTourVideoModal/ProductTourVideoModal";
import classes from "./ProductTour.module.css";
import productTourData from "./ProductTourData";

const ProductTour = ({ setOpen }: { setOpen: (setOpen: boolean) => void }) => {
  const [innerModal, setInnerModal] = React.useState(false);
  const [data, setData] = React.useState({ name: "", videoLink: "" });
  const handleClick = () => {
    setOpen(false);
  };
  const handleVideoModal = (id: string) => {
    let data: any = productTourData.find(({ name }) => id === name);
    setData(data);
    setInnerModal(true);
  };
  return (
    <Box className={classes.root}>
      <Box
        className={classes.container}
        sx={{ backgroundColor: "neutral.lighter" }}
      >
        <Box className={classes.headingContainer}>
          <Typography variant="h4" color="primary.dark" fontWeight="700">
            Product Tour
          </Typography>
          <Box sx={{ cursor: "pointer" }} onClick={handleClick}>
            <Image src="/productTour/cross.svg" alt="" width={32} height={32} />
          </Box>
        </Box>
        <Typography
          variant="p"
          fontWeight="400"
          color="primary.dark"
          maxWidth="647px"
          mt="5px"
        >
          Showcasing product highlights so you can quickly understand all you
          can achieve with your suites.
        </Typography>
        <Box>
          {productTourData.map(({ ...data }, index) => (
            <Box
              key={index}
              sx={{
                padding: "16px 0px",
                borderTop: index !== 0 ? "1px solid #DFE2E3" : "",
                borderBottom:
                  index !== productTourData.length - 1
                    ? "1px solid #DFE2E3"
                    : "",
              }}
            >
              <ProductTourCard {...data} handleClick={handleVideoModal} />
            </Box>
          ))}
        </Box>
        <Modal open={innerModal}>
          <ProductTourVideoModal
            setOpen={setInnerModal}
            name={data.name}
            link={data.videoLink}
          />
        </Modal>
      </Box>
    </Box>
  );
};

export default ProductTour;

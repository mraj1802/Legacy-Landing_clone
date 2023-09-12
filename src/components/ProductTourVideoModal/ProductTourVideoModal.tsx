import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./ProductTourVideoModal.module.css";

const ProductTourVideoModal = ({
  setOpen,
  link,
  name,
}: {
  setOpen: (setOpen: boolean) => void;
  link: string;
  name: string;
}) => {
  console.log(link);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.top}>
          <Box className={classes.headingContainer}>
            <ArrowBackIcon
              sx={{ color: "primary.dark", cursor: "pointer" }}
              onClick={handleClick}
            />
            <Typography variant="h4" color="primary.dark" component="p">
              {name}
            </Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={handleClick}>
            <Image src="/productTour/cross.svg" alt="" width={32} height={32} />
          </Box>
        </Box>
        <Box>
          <iframe
            src={link}
            frameBorder="0px"
            width="808"
            height="455"
          ></iframe>
        </Box>
        <Box textAlign="center" onClick={handleClick} mt="30px">
          <CustomButton variant="secondary">Back To Product tour</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductTourVideoModal;

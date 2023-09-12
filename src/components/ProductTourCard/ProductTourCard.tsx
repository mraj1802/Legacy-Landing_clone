import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./ProductTourCard.module.css";

const ProductTourCard = ({
  name,
  text,
  videoLink,
  image,
  handleClick,
}: {
  name: string;
  text: string;
  videoLink: string;
  image: StaticImageData;
  handleClick: (id: string) => void;
}) => {
  return (
    <Box className={classes.container}>
      <Box className={classes.image}>
        <Image src={image} alt="" />
      </Box>
      <section className={classes.rightSection}>
        <Box>
          <Typography variant="p" color="primary.dark" fontWeight="700">
            {name}
          </Typography>
          <Typography
            variant="caption"
            color="primary.dark"
            fontWeight="400"
            maxWidth="406px"
          >
            {text}
          </Typography>
        </Box>
        <Box
          onClick={() => {
            handleClick(name);
          }}
        >
          <CustomButton variant="secondary">
            <PlayArrowIcon style={{ marginRight: "8px" }} />
            Play Video
          </CustomButton>
        </Box>
      </section>
    </Box>
  );
};

export default ProductTourCard;

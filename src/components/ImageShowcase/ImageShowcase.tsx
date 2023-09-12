import { Box } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";
import Fade from "../../elements/Animation/Fade/Fade";
import { IImageShowcase } from "../../interfaces/components/ImageShowcase/imageShowcase";

const ImageShowcase = ({ src }: IImageShowcase) => {
  return (
    <Fade>
      <Box sx={{ letterSpacing: "0", wordSpacing: 0, fontSize: 0 }}>
        <Image src={src} alt="text" loading="lazy" />
      </Box>
    </Fade>
  );
};

export default ImageShowcase;

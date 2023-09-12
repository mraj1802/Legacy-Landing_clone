import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

const WalletCard = ({
  text,
  heading,
  image,
}: {
  text: string;
  image: StaticImageData;
  heading: string;
}) => {
  return (
    <Box>
      <Image src={image} alt="" />
      <Typography
        variant="body1"
        color="primary.dark"
        fontWeight="700"
        mt="16px"
      >
        {heading}
      </Typography>
      <Typography variant="p" color="primary.dark" fontWeight="600" mt="6px">
        {text}
      </Typography>
    </Box>
  );
};

export default WalletCard;

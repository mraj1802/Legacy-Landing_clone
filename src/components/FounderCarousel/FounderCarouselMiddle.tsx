import { Box, SxProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

const FounderCarouselMiddle = ({
  image,
  sx = {},
}: {
  image: StaticImageData;
  sx?: SxProps;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(12, 64, 136, 0.5) 0%, rgba(12, 64, 136, 0.5) 100%)",
        borderRadius: "25px",
        bottom: 0,
      }}
    >
      <Image src={image} alt="collection" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default FounderCarouselMiddle;

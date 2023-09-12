import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { IFounderCarouselLeftProps } from "../../interfaces/components/FounderCarousel/founderCarousel";
import tick from "/public/nftMuseum/tick.svg";
const FounderCarouselLeft = ({ data, heading }: IFounderCarouselLeftProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        px: "2rem",
        py: { xs: "3rem", sm: "5rem" },

        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        background:
          "linear-gradient(180deg, rgba(12, 64, 136, 0.5) 0%, rgba(12, 64, 136, 0.5) 100%)",
        justifyContent: "center",
        flex: 1,
        height: "100%",
        borderRadius: "25px",
        widht: "100%",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight="700"
          color={theme.palette.neutral.lighter}
        >
          {heading}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {data?.map((element, index) => {
          return (
            <Box sx={{ display: "flex", gap: "10px" }} key={index}>
              <Box sx={{ width: "100%", height: "100%", maxWidth: "24px" }}>
                <Image src={tick} alt="check" layout="intrinsic" />
              </Box>
              <Typography
                variant="body1"
                component="p"
                fontWeight="600"
                key={index}
                color={theme.palette.neutral.lighter}
              >
                {element.beforeText}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FounderCarouselLeft;

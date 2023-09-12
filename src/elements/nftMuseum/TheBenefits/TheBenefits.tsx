import { Box, Container, Typography, useTheme } from "@mui/material";
import FounderCarousel from "../../../components/FounderCarousel/FounderCarousel";

const TheBenefits = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          width: "90%",
          marginTop: "150px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            fontWeight="700"
            textAlign="center"
            component="h1"
            color={theme.palette.neutral.lighter}
            mb={3}
          >
            The Benefits
          </Typography>
          <Typography
            mt={3}
            component="p"
            variant="body1"
            fontWeight="400"
            textAlign="center"
            color={theme.palette.neutral.lighter}
          >
            Joining the exclusive ETERNALS CLUB society, means being part of a
            collective community that believe in preserving life after death.
            Preserving a Legacy is the law of the land. Shining a light to
            forever guide a path to memorialize your life’s journey.
          </Typography>
        </Box>
        <Box>
          <FounderCarousel />
        </Box>
      </Box>
    </Container>
  );
};

export default TheBenefits;

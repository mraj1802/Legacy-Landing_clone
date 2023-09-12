import { Box, Container, Typography, useTheme } from "@mui/material";
import AutoCarousel from "../../../components/AutoCarousel/AutoCarousel";
import classes from "./Collection.module.css";
import { collectionDataFirst, collectionDataSecond } from "./collectionData";

const Collection = () => {
  const theme = useTheme();
  return (
    <Container className={classes.container}>
      <Box>
        <AutoCarousel data={collectionDataFirst} />
        <Box className={classes.heading}>
          <Typography
            variant="h1"
            component="h1"
            color={theme.palette.neutral.lighter}
            fontWeight="800"
          >
            THE COLLECTION
          </Typography>
        </Box>
        <AutoCarousel data={collectionDataSecond} animation="right" />
      </Box>
    </Container>
  );
};

export default Collection;

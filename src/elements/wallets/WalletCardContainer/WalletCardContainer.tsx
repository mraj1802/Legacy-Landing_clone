import { Box, Container } from "@mui/material";
import { StaticImageData } from "next/image";
import * as React from "react";
import WalletCard from "../../../components/WalletCard/WalletCard";
import classes from "./WalletCardContainer.module.css";

interface IData {
  heading: string;
  text: string;
  image: StaticImageData;
}

const WalletCardContainer = ({ data }: { data: IData[] }) => {
  return (
    <Container>
      <Box className={classes.container}>
        {data.map(({ text, heading, image }, index) => (
          <Box key={index} className={classes.card}>
            <WalletCard heading={heading} text={text} image={image} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default WalletCardContainer;

"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Footer from "../../src/components/Footer/Footer";
import Navbar from "../../src/components/Navbar/Navbar";
import ResourcesHero from "../../src/components/ResourcesHero/ResourcesHero";
import FAQs from "../../src/elements/faqs/FAQs/FAQs";
import Glossary from "../../src/elements/faqs/FAQs/Glossary/Glossary";
import faqs from "/public/resources/faqs.png";

const Faqs = () => {
  const theme = useTheme();

  const boldStyle = { color: theme.palette.secondary.main, fontWeight: "700" };
  return (
    <Box>
      <Navbar />
      <ResourcesHero
        heading={
          <Typography variant="h1" color={theme.palette.neutral.lighter}>
            Frequently asked
            <span style={{ ...boldStyle }}> QUESTIONS</span>
          </Typography>
        }
        text="Have Questions? We are here to help."
        image={faqs}
      />
      <FAQs />
      <Glossary question={true} />
      <Footer />
    </Box>
  );
};

export default Faqs;

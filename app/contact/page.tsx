"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Script from "next/script";
import Footer from "../../src/components/Footer/Footer";
import Navbar from "../../src/components/Navbar/Navbar";
import ResourcesHero from "../../src/components/ResourcesHero/ResourcesHero";
import { ContactForm } from "../../src/elements/contact/ContactForm/ContactForm";
import FindUs from "../../src/elements/contact/FindUs/FindUs";
import Info from "../../src/elements/contact/Info/Info";
import FAQs from "../../src/elements/faqs/FAQs/FAQs";
import hero from "/public/contact/hero.png";
export default function Index() {
  const theme = useTheme();
  const boldStyle = { color: theme.palette.secondary.main, fontWeight: "700" };

  return (
    <Box>
      <Script
        id="tawktoScript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/638fe22cb0d6371309d2fa8e/1gjl0mvrb';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`,
        }}
      />
      <Navbar />
      <ResourcesHero
        heading={
          <Typography
            variant="h1"
            color={theme.palette.neutral.lighter}
            sx={{ marginTop: { lg: "50px" } }}
          >
            Get in
            <span style={{ ...boldStyle }}> TOUCH</span> with us!
          </Typography>
        }
        text="WE'D LOVE TO SPEAK WITH TO YOU."
        image={hero}
      />
      <ContactForm />
      <FAQs />
      <FindUs />
      <Info />
      <Footer />
    </Box>
  );
}

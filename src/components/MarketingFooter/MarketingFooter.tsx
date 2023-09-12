import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import bbb from "/public/logo/bbb.svg";
import certik from "/public/logo/certik.svg";
import patent from "/public/logo/patent.svg";
import classes from "./MarketingFooter.module.css";
import legacy from "/public/short-logo.svg";
import discord from "/public/logo/discord.svg";
import yt from "/public/logo/yt.svg";
import twitter from "/public/logo/twitter.svg";
import insta from "/public/logo/insta.svg";
import fb from "/public/logo/fb.svg";
import Link from "next/link";

const MarketingFooter = () => {
  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Box className={classes.container}>
            <section className={classes.legacy}>
              <Box className={classes.badges}>
                <Box>
                  <Image src={patent} alt="logo" />
                </Box>
                <Box>
                  <Link href="https://www.bbb.org/us/ca/palo-alto/profile/computer-software/legacy-suite-1216-1640007#bbbseal">
                    <Image src={bbb} alt="logo" />
                  </Link>
                </Box>
                <Box>
                  <Link href="https://www.certik.com/projects/legacysuite?utm_source=SkyEmblem&utm_campaign=legacysuite&utm_medium=link">
                    <Image src={certik} alt="logo" />
                  </Link>
                </Box>
              </Box>
              <Typography color="neutral.lighter" variant="p" mt="22px">
                ™ & © 2023 Legacy Suite, Inc. Legacy Suite is not a law firm and
                only provides “self-help” informational and educational forms
                distributed on an as-is basis for common estate planning needs.
                All Rights Reserved.
              </Typography>
            </section>
            <section className={classes.about}>
              <Box>
                <Image src={legacy} alt="logo" />
              </Box>
              <Typography color="neutral.lighter" variant="h4">
                About Legacy Suite
              </Typography>
              <Typography color="neutral.lighter" variant="p" mt="14px">
                Legacy Suite is a patent pending Digital Estate Management
                System designed to help you securely transfer all digital assets
                to preserve your digital life. Start your trial today.{" "}
                <Link href="/about">Learn More</Link>
              </Typography>
            </section>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "neutral.light" }}>
        <Container>
          <Box className={classes.secondaryFooterContainer}>
            <Box sx={{ display: "flex" }}>
              <Link href="/terms-of-use">
                <Typography variant="caption" color="primary.dark">
                  Terms of Use
                </Typography>
              </Link>
              <Link href="/privacy-policy">
                <Typography variant="caption" color="primary.dark" pl="22px">
                  Privacy Policy
                </Typography>
              </Link>
            </Box>
            <Box>
              {imageData.map((data, index) => (
                <Link href={data.link} key={index}>
                  <Image
                    src={data.image}
                    key={index}
                    alt="logo"
                    style={{ margin: "0px 10px" }}
                  />
                </Link>
              ))}
            </Box>
            <Box>
              <Typography variant="caption" color="primary.dark">
                info@legacysuite.com
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
const imageData = [
  {
    image: insta,
    link: "https://www.instagram.com/legacy.suite/",
  },
  {
    image: twitter,
    link: "https://twitter.com/legacy_suite",
  },
  {
    image: fb,
    link: "https://www.facebook.com/Legacy-Suite-100653975957864",
  },
  {
    image: yt,
    link: "https://www.youtube.com/channel/UC1mgBZhlD9BnH57wmORtAOA/videos",
  },
  {
    image: discord,
    link: "https://discord.gg/Ne6DefZNt6",
  },
];

export default MarketingFooter;

import { Box, Container, Typography } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import classes from "./FindUs.module.css";
import image from "/public/contact/find.png";
import discord from "/public/icon/discord.svg";
import facebook from "/public/icon/facebook.svg";
import insta from "/public/icon/insta.svg";
import twitter from "/public/icon/twitter.svg";
import youtube from "/public/icon/youtube.svg";
const FindUs = () => {
  return (
    <Box className={classes.root}>
      <Container component="div" className={classes.container}>
        <Box>
          <Typography color="neutral.lighter" variant="h1" fontWeight="700">
            Where to find us.
          </Typography>
          <Typography color="neutral.lighter" variant="p" mt="16px" mb="32px">
            Our friendly team would love to meet you.
          </Typography>
          <Image src={image} alt="find" />
        </Box>
        <Box>
          <Typography
            sx={{ marginTop: { lg: "90px" } }}
            color="neutral.lighter"
            variant="h5"
          >
            Legacy Suite Inc <br /> 3790 El Camino Real # 1121 <br /> Palo Alto,
            CA 94306
          </Typography>
          <Typography mt="31px" color="neutral.lighter" variant="caption">
            info@legacysuite.com
          </Typography>
          <Box className={classes.iconContainer}>
            <Link href="https://www.facebook.com/Legacy-Suite-100653975957864">
              <Box>
                <Image src={facebook} alt="icon" />
              </Box>
            </Link>
            <Link href="https://discord.gg/Ne6DefZNt6">
              <Box>
                <Image src={discord} alt="icon" />
              </Box>
            </Link>
            <Link href="https://www.instagram.com/legacy.suite/">
              <Box>
                <Image src={insta} alt="icon" />
              </Box>
            </Link>
            <Link href="https://twitter.com/legacy_suite">
              <Box>
                <Image src={twitter} alt="icon" />
              </Box>
            </Link>
            <Link href="https://www.youtube.com/channel/UC1mgBZhlD9BnH57wmORtAOA/videos">
              <Box>
                <Image src={youtube} alt="icon" />
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FindUs;

import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import classes from "./Footer.module.css";
import facebook from "/public/icon/facebook.svg";
import discord from "/public/icon/discord.svg";
import insta from "/public/icon/insta.svg";
import twitter from "/public/icon/twitter.svg";
import telegram from "/public/icon/telegram.svg";
import linkedin from "/public/icon/linkedin-icon.svg";
import youtube from "/public/icon/youtube.svg";
import Image from "next/image";
import logowhite from "/public/logo/logo-footer.svg";
import { footerDesktopData, servicesData } from "./footerData";
import Link from "next/link";
import bbb from "/public/logo/bbb.svg";
import certik from "/public/logo/certik.svg";
import patent from "/public/logo/patent.svg";
import stripe from "/public/logo/stripe.svg";
import FooterList from "../FooterList/FooterList";
import globe from "/public/icon/globe.svg";
import { newsLetter } from "../../api/newsLetter";
import { toast } from "react-toastify";
import arrow from "/public/arrow.svg";
import { navbarServicesData } from "../Navbar/NavbarData";

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setEmail] = React.useState("");
  const handleSubmit = async () => {
    try {
      console.log(email);
      const body: { email: string } = { email: email };
      const res: any = await newsLetter(body);
      toast.success("Email Added to waitlist.");
      setEmail("");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.container}>
          <section className={classes.left}>
            <Box className={classes.image}>
              <Image src={logowhite} width="300" height="50" alt="logo" />
            </Box>
            <Typography
              variant="p"
              fontWeight="400"
              component="p"
              color="neutral.lighter"
              className={classes.text}
              mt="24px"
            >
              LegacySuite (Legacy Suite Inc) is not a law firm and only provides
              “self-help” informational and educational forms distributed on an
              as-is basis for common estate planning needs.
            </Typography>
            <Typography
              variant="body1"
              fontWeight="700"
              color="neutral.lighter"
              component="h4"
              mt="45px"
              mb="12px"
            >
              Services
            </Typography>
            <Box className={classes.services}>
              {isMatch
                ? servicesData.map(({ heading, link, text }, index) => (
                    <Box key={index}>
                      <FooterList
                        heading={heading}
                        text={text}
                        forServices={true}
                        link={link}
                      />
                    </Box>
                  ))
                : servicesData.map(({ heading, link, text }, index) => (
                    <Box key={index}>
                      <Link href={link}>
                        <Typography
                          variant="p"
                          fontWeight="700"
                          color="secondary.main"
                        >
                          {heading}
                        </Typography>
                      </Link>
                      {text!.map(({ text, link }, index) => (
                        <Link href={link} key={index} scroll={true}>
                          <Typography
                            color="neutral.lighter"
                            variant="p"
                            fontWeight="500"
                            component="p"
                            whiteSpace={"nowrap"}
                            mt="16px"
                          >
                            {text}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  ))}
            </Box>
          </section>
          <section className={classes.right}>
            <Box>
              <Box className={classes.inputContainer}>
                <input
                  className={classes.input}
                  name="email"
                  placeholder="Subscribe to our Newsletter"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
                <Box className={classes.img} onClick={handleSubmit}>
                  <Image src={arrow} alt="" />
                </Box>
              </Box>
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
                <Link href="https://www.linkedin.com/company/legacysuite/">
                  <Box>
                    <Image src={linkedin} alt="icon" />
                  </Box>
                </Link>
                <Link href="https://t.me/LegacySuiteOfficial">
                  <Box>
                    <Image src={telegram} alt="icon" />
                  </Box>
                </Link>
              </Box>
            </Box>
            <Box
              className={classes.services}
              sx={{ mt: { lg: "32px", md: "32px", sm: "0px" } }}
            >
              {isMatch
                ? footerDesktopData.map(({ heading, text, link }, index) => (
                    <Box key={index}>
                      <FooterList heading={heading} text={text} link={link} />
                    </Box>
                  ))
                : footerDesktopData.map(({ heading, text }, index) => (
                    <Box key={index}>
                      <Typography
                        variant="p"
                        fontWeight="700"
                        color="neutral.lighter"
                        component="h4"
                      >
                        {heading}
                      </Typography>
                      {text!.map(({ text, link }, index) => (
                        <Link href={link} key={index} scroll={true}>
                          <Typography
                            color="neutral.lighter"
                            variant="p"
                            fontWeight="500"
                            component="p"
                            whiteSpace={"nowrap"}
                            mt="16px"
                          >
                            {text}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  ))}
            </Box>
          </section>
        </Box>
        <Box className={classes.addressSection}>
          <Typography variant="p" color="neutral.lighter" component="p">
            Legacy Suite Inc
            <br /> 3790 El Camino Real #1121
            <br /> Palo Alto, CA 94306
            <br />
            <br />
          </Typography>
          <section className={classes.logoContainer}>
            <Box className={classes.badges}>
              <Box className={classes.badgeContainer}>
                <Box>
                  <a href="https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11599961">
                    <Image src={patent} alt="logo" />
                  </a>
                </Box>
                <Box>
                  <Link href="https://www.bbb.org/us/ca/palo-alto/profile/computer-software/legacy-suite-1216-1640007#bbbseal">
                    <Image src={bbb} alt="logo" className={classes.logo} />
                  </Link>
                </Box>
              </Box>
              <Link href="https://www.certik.com/projects/legacysuite?utm_source=SkyEmblem&utm_campaign=legacysuite&utm_medium=link">
                <Image src={certik} alt="logo" />
              </Link>
            </Box>
          </section>
        </Box>
        {/* Secondary Footer */}
        <section className={classes.secondaryFooterContainer}>
          <Box className={classes.secondaryFooter}>
            <Box>
              <Typography
                variant="caption"
                color="neutral.lighter"
                fontWeight={500}
                component="p"
                pr={"16px"}
                className={classes.copy}
              >
                Copyright © 2023 LegacySuite Inc. All rights reserved.
              </Typography>
            </Box>
            <Box className={classes.linkContainer}>
              <Link href="/privacy-policy">
                <Typography
                  variant="caption"
                  color="neutral.lighter"
                  fontWeight={500}
                  component="p"
                  className={classes.border}
                >
                  Privacy Policy
                </Typography>
              </Link>
              <Link href="/terms-of-use">
                <Typography
                  variant="caption"
                  color={theme.palette.neutral.lighter}
                  fontWeight={500}
                  component="p"
                  className={classes.terms}
                >
                  Terms of Use
                </Typography>
              </Link>
              <Link href="/faqs">
                <Typography
                  variant="caption"
                  color={theme.palette.neutral.lighter}
                  fontWeight={500}
                  component="p"
                  className={classes.border}
                  px={"16px"}
                >
                  FAQs
                </Typography>
              </Link>
            </Box>
            <Box className={classes.language}>
              <Box>
                <Image src={globe} alt="globe" />
              </Box>
              <Typography
                variant="caption"
                color={theme.palette.neutral.lighter}
                fontWeight={500}
                component="p"
                pt={0.2}
              >
                English (United States)
              </Typography>
            </Box>
          </Box>
          <Box className={classes.stripe}>
            <Image src={stripe} alt="logo" />
          </Box>
        </section>
      </Container>
    </Box>
  );
};

export default Footer;

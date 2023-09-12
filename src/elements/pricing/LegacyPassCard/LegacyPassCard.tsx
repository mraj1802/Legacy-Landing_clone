import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import classes from "./LegacyPassCard.module.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Image from "next/image";
import Link from "next/link";

const LegacyPassCard = ({
  price,
  type = "month",
}: {
  price: string;
  type: string;
}) => {
  return (
    <Box className={classes.container}>
      <Box className={classes.root}>
        <section>
          <Box
            className={classes.left}
            sx={{ backgroundColor: "neutral.light" }}
          >
            <Typography variant="h3" fontWeight="700" pb="23px" pt="52px">
              Password Manager
            </Typography>
            <Box>
              <Typography
                variant="h2"
                color={"primary.dark"}
                fontWeight="400"
                pl={"22px"}
                display="inline"
              >
                $ {price}
              </Typography>
              <Typography
                variant="body1"
                color="primary.dark"
                display="inline"
                pl="4px"
                fontWeight="700"
              >
                /{type}
              </Typography>
            </Box>
            <Typography
              variant="caption"
              color="primary.dark"
              fontWeight="400"
              mt="22px"
            >
              For Password Manager all of your accounts.
            </Typography>
            <Box width="100%" px="20px" mb="70px" mt="32px">
              <Link href="https://app.legacysuite.com">
                <CustomButton variant="secondary" className={classes.btn}>
                  BUY NOW
                </CustomButton>
              </Link>
            </Box>
          </Box>
        </section>
        <section className={classes.right}>
          <Typography
            variant="body1"
            fontWeight="700"
            color="primary.dark"
            mt="50px"
          >
            LegacyPass™ Includes:
          </Typography>
          <Box className={classes.valueContainer}>
            {value.map((val, index) => (
              <Box
                color="primary.dark"
                className={classes.textContainer}
                key={index}
              >
                <Box>
                  <CheckCircleRoundedIcon />
                </Box>
                <Typography
                  variant="body1"
                  color={"primary.dark"}
                  sx={{ whiteSpace: "normal" }}
                  fontWeight="400"
                  component="p"
                >
                  {val}
                </Typography>
              </Box>
            ))}
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default LegacyPassCard;

const value: string[] = [
  "Manage, store, and sort secure passwords",
  "Share passwords with loved ones and colleagues",
  "Maintain passwords in a fortified blockchain vault",
  "Empower decentralized blockchain digital identities to remove exposures of sensitive data and tracking of your activity",
];

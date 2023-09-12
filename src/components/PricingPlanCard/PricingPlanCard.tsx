import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./PricingPlanCard.module.css";
import commingSoon from "/public/pricing/comming-soon.svg";
import popular from "/public/pricing/popular.svg";

const PricingPlanCard = ({
  type = "Ultimate",
  planType,
  heading = "What's Included:",
  price,
  addOns,
  textTwo,
  features,
  text,
  btnText = "Buy Now",
  btnLink = "https://app.legacysuite.com",
}: {
  type: string;
  planType?: string;
  heading: string;
  price: string;
  addOns?: string[];
  textTwo?: string;
  features: string[];
  text: string;
  btnText?: string;
  btnLink?: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      className={classes.root}
      sx={{
        backgroundColor: "white",
        borderLeft: {
          lg:
            type === "Free" || type === "Standard"
              ? "none"
              : "1px solid #C0C4C8",
        },
        border: type === "Standard" ? "3px solid #28EAE9 !important" : "none",
      }}
    >
      <section className={classes.textSection}>
        {type === "Standard" && (
          <Box className={classes.img}>
            <Image src={popular} alt="" />
          </Box>
        )}
        {type === "Ultimate" && (
          <Box className={classes.commingSoon}>
            <Image src={commingSoon} alt="" />
          </Box>
        )}
        <Typography
          variant="body1"
          component="h3"
          color={"primary.dark"}
          fontWeight="700"
          mb="12px"
          px={"22px"}
        >
          {type}
        </Typography>
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
          fontWeight="500"
        >
          {planType && `/${planType}`}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="400"
          color="primary.dark"
          px={"22px"}
          my="16px"
          minHeight="96px"
        >
          {text}
        </Typography>
        <Box px={"22px"}>
          <Link href={btnLink}>
            <CustomButton variant="secondary" sx={{ width: "100%" }}>
              {btnText}
            </CustomButton>
          </Link>
        </Box>
      </section>
      <Typography
        variant="body1"
        color={"primary.dark"}
        mt={"30px"}
        component="p"
        px={"22px"}
        fontWeight="700"
      >
        {heading}
      </Typography>
      <Box
        className={classes.line}
        sx={{
          borderBottom:
            type === "Premium"
              ? `2px dotted ${theme.palette.primary.dark}`
              : "none",
        }}
      >
        <Typography
          variant="body1"
          color={"primary.dark"}
          sx={{ whiteSpace: "normal" }}
          fontWeight="400"
          component="p"
          px={"22px"}
        >
          {textTwo}
        </Typography>
        {features.map((val: string, index: number) => {
          return (
            <Box className={classes.textContainer} key={index} px={"22px"}>
              <Box
                sx={{
                  color: "primary.dark",
                }}
              >
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
          );
        })}
      </Box>
      {addOns &&
        addOns.map((val: string, index: number) => {
          return (
            <Box
              className={classes.textContainer}
              mt="22px !important"
              key={index}
              px={"22px"}
            >
              <Box
                sx={{
                  color:
                    type === "Ultimate"
                      ? theme.palette.neutral.lighter
                      : theme.palette.primary.dark,
                }}
              >
                <AddCircleRoundedIcon />
              </Box>
              <Typography
                variant="body1"
                color={
                  type === "Ultimate"
                    ? theme.palette.neutral.lighter
                    : theme.palette.primary.dark
                }
                sx={{ whiteSpace: "normal" }}
                fontWeight="400"
                component="p"
              >
                {val}
              </Typography>
            </Box>
          );
        })}
    </Box>
  );
};

export default PricingPlanCard;

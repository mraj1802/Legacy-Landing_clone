import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import PricingPlanCard from "../../../components/PricingPlanCard/PricingPlanCard";
import {
  free,
  monthlyPremium,
  monthlyStandard,
  monthlyUltimate,
  yearlyPremium,
  yearlyStandard,
  yearlyUltimate,
} from "./planData";
import off from "/public/pricing/off.svg";

import classes from "./PricingPlans.module.css";
import Image from "next/image";
import LegacyPassCard from "../LegacyPassCard/LegacyPassCard";
const PricingPlans = () => {
  const theme = useTheme();
  const [state, setState] = React.useState("year");
  const boldStyle = { fontWeight: "700" };

  return (
    <>
      <Box className={classes.root}>
        <Container className={classes.container}>
          <Typography
            variant="h2"
            color={theme.palette.primary.dark}
            component="h2"
            textAlign="center"
            fontWeight="700"
          >
            Initiate Your Pricing Plan
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            component="p"
            sx={{
              whiteSpace: "normal !important",
              fontWeight: "400 !important",
              maxWidth: "1116px",
              margin: "auto",
            }}
            mt="22px !important"
          >
            Securely manage all your digital assets to preserve your digital
            life. We make things transparent and predictable. Launch your legacy
            with a 14-day free trial. You have flexibility to change or cancel
            your plan at any time.
          </Typography>
          <Box className={classes.radio}>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="Billing"
              defaultValue="year"
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <FormControlLabel
                value="month"
                sx={{ ...stylesOverriedLabel }}
                control={
                  <Radio
                    sx={{
                      color: theme.palette.primary.dark,
                      "&.Mui-checked": {
                        color: theme.palette.primary.dark,
                      },
                    }}
                  />
                }
                label="Billed Monthly"
              />
              <FormControlLabel
                value="year"
                control={
                  <Radio
                    sx={{
                      color: theme.palette.primary.dark,
                      "&.Mui-checked": {
                        color: theme.palette.primary.dark,
                      },
                    }}
                  />
                }
                label="Billed Yearly"
                sx={{ ...stylesOverriedLabel }}
              />
            </RadioGroup>
            <Image src={off} alt="" />
          </Box>
        </Container>
        <Box className={classes.cardMainContainer}>
          <Box className={classes.cardsContainer}>
            <Box>
              <PricingPlanCard {...free} />
            </Box>
            <Box>
              {state === "year" ? (
                <PricingPlanCard {...yearlyStandard} />
              ) : (
                <PricingPlanCard {...monthlyStandard} />
              )}
            </Box>
            <Box>
              {state === "year" ? (
                <PricingPlanCard {...yearlyPremium} />
              ) : (
                <PricingPlanCard {...monthlyPremium} />
              )}
            </Box>
            <Box>
              {state === "year" ? (
                <PricingPlanCard {...yearlyUltimate} />
              ) : (
                <PricingPlanCard {...monthlyUltimate} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {state === "year" ? (
        <LegacyPassCard price="49" type="year" />
      ) : (
        <LegacyPassCard price="5" type="month" />
      )}
    </>
  );
};

const stylesOverriedLabel = {
  ".MuiFormControlLabel-label": {
    fontWeight: "300",
  },
};

export default PricingPlans;
const standardPlan = {
  plans: [
    "Create Will",
    "Create Social Directives",
    "Create Health Care Directives",
    "Create Guardianship Directives",
    "Create Power of Attorney Documents",
    "Legal Suite Vault (1G)*",
    "Create Revocable Living Trust Documents",
  ],
  title: "Standard",
  pricing: [
    {
      price: "129.99",
      plan: "yr",
    },
  ],
};
const premiumPlan = {
  plans: [
    "Beneficiary / Trusted Contact Reporting",
    "Future Messaging",
    "Legacy Journal",
    "Digital Accounts Password Manager and Sharing",
    "Digital Vault  (5G)*",
    "End of Life Planning",
  ],
  title: "Premium",
  pricing: [
    {
      price: 14.99,
      plan: "month",
    },
    {
      price: 149.99,
      plan: "yr",
    },
  ],
};
const ultimatePlan = {
  plans: [
    "Crypto Will™ & NFT Will™",
    "Asset Aggregation- Assets & Liabilities*",
    "Subcription Manager",
    "Finacial Reports - Net Worth",
    "Legacy Lifeline™",
  ],
  title: "Ultimate",
  pricing: [
    {
      price: 19.99,
      plan: "month",
    },
    {
      price: 199.99,
      plan: "yr",
    },
  ],
};

const cards = [
  {
    variant: "primary",
    ...standardPlan,
  },
  {
    variant: "secondary",
    ...ultimatePlan,
  },
  {
    variant: "primary",
    ...premiumPlan,
  },
];

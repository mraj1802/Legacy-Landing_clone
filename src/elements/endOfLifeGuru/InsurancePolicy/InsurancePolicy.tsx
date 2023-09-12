import { Box, Container, Grow, Typography, useTheme } from "@mui/material";
import * as React from "react";
import InsuranceCard from "../../../components/InsuranceCard/InsuranceCard";
import classes from "./InsurancePolicy.module.css";
import InsurancePolicyData from "./insurancePolicyData";

const InsurancePolicy = () => {
  const theme = useTheme();
  const [state, setState] = React.useState(1);
  const ref = React.useRef();
  const [text, setText] = React.useState("");
  const handleClick = (id: number, text: string) => {
    setText(text);
  };
  React.useEffect(() => {
    setText(InsurancePolicyData[0].text);
  }, []);
  return (
    <Box sx={{ backgroundColor: theme.palette.neutral.light }}>
      <Container>
        <Box className={classes.root}>
          <Box className={classes.box}>
            <Typography
              variant="h2"
              color={theme.palette.primary.dark}
              mt="72"
              fontWeight="700"
            >
              Identifying Life Insurance Policy
            </Typography>
            {InsurancePolicyData.map(({ heading, text, id }) => {
              return (
                <InsuranceCard
                  key={id}
                  text={heading}
                  number={id}
                  id={id}
                  state={state}
                  setState={setState}
                  handleClick={handleClick}
                  paragraph={text}
                />
              );
            })}
          </Box>
          {InsurancePolicyData.map(
            ({ text, id }) =>
              state === id && (
                <Grow in={id === state} key={id}>
                  <Box className={classes.textContainer}>
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.text}
                      sx={{ whiteSpace: "normal" }}
                      fontWeight="400"
                    >
                      {text}
                    </Typography>
                  </Box>
                </Grow>
              )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default InsurancePolicy;

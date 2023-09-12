import { Button, useTheme } from "@mui/material";
import { CustomButtonProps } from "../../interfaces/components/CustomButton/customButton";
import classes from "./CustomButton.module.css";
const CustomButton = ({
  children,
  variant = "primary",
  className,
  style = {},
  sx = {},
}: CustomButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      className={`${classes.rootBtn} ${className}`}
      variant={variant}
      sx={{ ...sx }}
    >
      <div
        className={classes.circle}
        style={{
          background: theme.palette.secondary.main,
        }}
      />

      {children}
    </Button>
  );
};
export default CustomButton;

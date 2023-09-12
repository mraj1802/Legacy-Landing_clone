import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Typography } from "@mui/material";
import classes from "./MenuCard.module.css";

const MenuCard = ({
  text,
  state = false,
  id = 1,
  setState,
  mouseEnter,
  mouseLeave,
  url,
}: {
  state: boolean | number;
  text: string;
  id: number;
  setState(id: number): any;
  mouseEnter(id: number, e?: any): any;
  mouseLeave(id: number): any;
  url?: string;
}) => {
  return (
    <Box
      className={classes.textContainer}
      onMouseEnter={(e) => {
        mouseEnter(id, e);
      }}
      onMouseLeave={() => {
        mouseLeave(id);
      }}
      sx={{
        borderTop: id !== 1 ? "1px solid rgba(176, 202, 238, 0.2)" : "none",
        backgroundColor: "inherit",
      }}
    >
      <Box>
        <Typography
          color={id === state ? "secondary.main" : "white"}
          fontWeight="600"
          sx={{ cursor: "pointer", whiteSpace: "nowrap" }}
          variant="p"
        >
          {text}
        </Typography>
      </Box>
      {!url && (
        <Box
          color={state === id ? "secondary.main" : "white"}
          sx={{
            fontSize: "0.5rem",
            mt: "4px",
          }}
        >
          <KeyboardArrowRightIcon />
        </Box>
      )}
    </Box>
  );
};

export default MenuCard;

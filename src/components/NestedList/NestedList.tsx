import { Box, MenuList, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { INavbarListData } from "../../interfaces/components/Navbar/navbar";

const NestedList = ({
  dropDown,
  id,
}: {
  dropDown: INavbarListData[];
  id: number;
}) => {
  return (
    <Paper
      sx={{
        minWidth: "256px",
        background:
          "linear-gradient(180deg, rgba(12, 64, 136, 0.5) 0%, rgba(12, 64, 136, 0.5) 100%)",
        backdropFilter: "blur(20px)",
        borderRadius: "0px 8px 8px 8px",
        border: "1px solid rgba(176, 202, 238, 0.5)",
      }}
    >
      <Box>
        <MenuList>
          {dropDown.map(({ name, url }, index) => (
            <Link href={url} key={index}>
              <Typography
                color={"white"}
                fontWeight="600"
                sx={{
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  borderTop:
                    index !== 0 ? "1px solid rgba(176, 202, 238, 0.5)" : "none",
                  padding: "12px 16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
                variant="p"
              >
                {name}
              </Typography>
            </Link>
          ))}
        </MenuList>
      </Box>
    </Paper>
  );
};

export default NestedList;

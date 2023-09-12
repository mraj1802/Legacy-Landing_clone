"use client";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import styles from "./PdfPageTemplate.module.css";

const NestedItems = ({
  index,
  nestedTabs,
  mainHeading,
  setIndex,
  selectedIndex,
}: {
  index: number;
  nestedTabs: any;
  mainHeading: string;
  setIndex(index: any): any;
  selectedIndex: any;
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ListItemButton
        key={index}
        selected={selectedIndex === index}
        onClick={(event) => setOpen(!open)}
        className={styles.listButton}
      >
        <ListItemText
          primary={mainHeading}
          primaryTypographyProps={{
            fontSize: "16px !important",
            fontWeight: "400",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedTabs?.map((nestedObject: any) => {
            let nestedHeading: string = Object.keys(nestedObject)[0];
            let nestedURL: any = Object.values(nestedObject)[0];

            return (
              <a href={nestedURL} key={index}>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={(event) => setIndex(index)}
                  className={styles.listButton}
                >
                  <ListItemText
                    primary={nestedHeading}
                    primaryTypographyProps={{
                      fontSize: "13px !important",
                      fontWeight: "400",
                    }}
                  />
                </ListItemButton>
              </a>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default NestedItems;

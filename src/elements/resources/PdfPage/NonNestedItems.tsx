"use client";
import * as React from "react";
import { ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import styles from "./PdfPageTemplate.module.css";

const NonNestedItems = ({
  index,
  mainHeading,
  mainURL,
  setIndex,
  selectedIndex,
}: {
  index: number;
  mainHeading: string;
  mainURL: string;
  setIndex: (index: number) => void;
  selectedIndex: any;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleListItemClick = (index: number) => {
    setOpen(!open);
    setIndex(index);
  };

  return (
    <a href={`${mainURL}`}>
      <ListItemButton
        key={index}
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(index)}
        className={styles.listButton}
      >
        <ListItemText
          primaryTypographyProps={{
            fontSize: "16px !important",
            fontWeight: "400",
          }}
          primary={mainHeading}
        />
      </ListItemButton>
    </a>
  );
};

export default NonNestedItems;

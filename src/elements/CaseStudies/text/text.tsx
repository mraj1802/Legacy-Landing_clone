"use client";
import React from "react";
import { ParagraphProps } from "../../../interfaces/elements/case-studies/caseStudies";
import styles from "./text.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editorConfig: any = {
  toolbar: [],
};

const Text = ({ paragraph }: { paragraph: ParagraphProps }) => {
  console.log(paragraph);
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: paragraph.backgroundColor || "transparent",
        color: paragraph.textColor || "#0c4088",
      }}
    >
      <CKEditor
        editor={ClassicEditor}
        data={paragraph.content}
        config={editorConfig}
        disabled={true}
      />
    </div>
  );
};

export default Text;

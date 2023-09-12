import fs from "fs";
import path from "path";

// to get the path to a specific file
export const BLOGS_PATH = path.join(process.cwd(), "content/blogs");

// list of all mdx files inside the BLOGS_PATH directory
export const blogFilePaths = fs
  .readdirSync(BLOGS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

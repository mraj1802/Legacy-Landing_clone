"use client";
import { Box, SxProps, Typography } from "@mui/material";
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from "next-mdx-remote";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Mdx({
  source,
  sx = {
    margin: "auto",
  },
}: {
  source: MDXRemoteSerializeResult;
  sx?: SxProps;
}) {
  return (
    <Box>
      {Boolean(source) && <MDXRemote {...source} components={components} />}
    </Box>
  );
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const headerCustomStyle = {
  sx: { textAlign: "center", m: "20px 0", color: "primary.dark" },
};
const components: any = {
  a: Link,
  Head,
  h1: (props: MDXRemoteProps) => (
    <Typography variant="h1" {...headerCustomStyle} {...props} />
  ),
  h2: (props: MDXRemoteProps) => (
    <Typography
      variant="h5"
      color={"primary.dark"}
      sx={{
        textAlign: "left",
        marginTop: "20px",
        marginBottom: "12px",
        fontWeight: "700",
      }}
      {...props}
    />
  ),
  h3: (props: MDXRemoteProps) => (
    <Typography variant="h3" {...headerCustomStyle} {...props} />
  ),
  h4: (props: MDXRemoteProps) => (
    <Typography variant="h4" {...headerCustomStyle} {...props} />
  ),
  h5: (props: MDXRemoteProps) => (
    <Typography variant="h5" {...headerCustomStyle} {...props} />
  ),
  h6: (props: MDXRemoteProps) => (
    <Typography
      variant="body1"
      component="h6"
      sx={{ textAlign: "center", fontWeight: "400 !important" }}
      {...props}
    />
  ),
  li: (props: MDXRemoteProps) => (
    <Typography
      variant="body1"
      component="li"
      sx={{ m: 0, fontWeight: "400 !important" }}
      {...props}
    />
  ),
  ol: (props: MDXRemoteProps) => (
    <Typography
      variant="body1"
      component="ol"
      sx={{ m: 0, fontWeight: "400 !important" }}
      {...props}
    />
  ),
  ul: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  p: (props: any) => {
    if (typeof props?.children?.type === "function") {
      return <>{props.children}</>;
    }
    return <Typography variant="body1" fontWeight="400" {...props} />;
  },
  img: ({ ...props }) => (
    <div
      style={{
        position: "relative",
        aspectRatio: "16/9.16",
        marginTop: "20px",
      }}
    >
      <Image src={props.src} layout="fill" objectFit="contain" alt="" />
    </div>
  ),
  Typography: (props: MDXRemoteProps) => (
    <Typography
      variant="body1"
      sx={{ fontWeight: "400 !important" }}
      {...props}
    />
  ),
};

"use client";
import { Box, Typography } from "@mui/material";
import * as React from "react";
import CaseStudyContent from "../CaseStudyContent/CaseStudyContent";
import Navbar from "../../../components/Navbar/Navbar";
import BlogDetailHero from "../../blogs/BlogDetailHero/BlogDetailHero";
import Footer from "../../../components/Footer/Footer";

const CaseStudyDetail = (res: any) => {
  const [data, setData] = React.useState(res?.res?.data[0]?.attributes);
  return (
    <Box>
      <Navbar />
      <BlogDetailHero
        heading={data?.title}
        bannerImage={data?.bannerImage?.data?.attributes?.url}
      />

      {data?.components && <CaseStudyContent data={data?.components} />}
      <Footer />
    </Box>
  );
};

export default CaseStudyDetail;

"use client";
import { Box } from "@mui/material";
import * as React from "react";
import Footer from "../../src/components/Footer/Footer";
import Navbar from "../../src/components/Navbar/Navbar";
import Collection from "../../src/elements/nftMuseum/Collection/Collection";
import NftMuseumHero from "../../src/elements/nftMuseum/NftMuseumHero/NftMuseumHero";
import RoadMap from "../../src/elements/nftMuseum/RoadMap/RoadMap";
import TextSection from "../../src/elements/nftMuseum/TextSection/TextSection";
import TheBenefits from "../../src/elements/nftMuseum/TheBenefits/TheBenefits";
import TheVision from "../../src/elements/nftMuseum/TheVision/TheVision";
import SymbolicAndArtistic from "../../src/elements/SymbolicAndArtistic/SymbolicAndArtistic";

const NftMuseum = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {/* <head> */}
      <title>
        NFT Museum | Protect Your NFT&apos;s assets & Wallet | Legacy Suite
      </title>
      <meta
        name="description"
        content="Legacy Suite is backed by technology to make cryptocurrency & NFT wallet safe. We help you transfer your crypto & NFTs vaults to your loved ones and provide digital asset protection. Safeguard your digital life, start your trial today."
      />
      <meta name="keywords" content="digital asset security" />
      {/* </head> */}
      <Box sx={{ background: "var(--primary-gradient)" }}>
        <Navbar />
        <NftMuseumHero />
        <div
          style={{
            height: "100%",
            position: "relative",
            paddingBottom: "56.25%",
            margin: "0px",
          }}
        >
          <iframe
            src="https://streamable.com/e/igqd5m?autoplay=1"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              overflow: "hidden",
              left: "0px",
              top: "0px",
            }}
          ></iframe>
        </div>
        <TheVision />
        <Collection />
        <TextSection />
        <TheBenefits />
        <RoadMap />
        <SymbolicAndArtistic
          type="secondary"
          heading="Get Started Now"
          text="We help you organize, create and secure important information and preserve your digital life."
          btnText="CREATE ACCOUNT"
        />
        <Footer />
      </Box>
    </>
  );
};

export default NftMuseum;

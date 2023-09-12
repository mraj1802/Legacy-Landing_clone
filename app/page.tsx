"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Script from "next/script";
import * as React from "react";
import Hero from "../src/components/Hero/Hero";
import Loading from "../src/components/Loading/Loading";
import Navbar from "../src/components/Navbar/Navbar";
import SecureByCarousel from "../src/components/SecureByCarousel/SecureByCarousel";
import Glossary from "../src/elements/faqs/FAQs/Glossary/Glossary";
import PasswordManagement from "../src/elements/home/PasswordManagement/PasswordManagement";
import WalletProtection from "../src/elements/home/WalletProtection/WalletProtection";
import SecurityInsightsSecondary from "../src/elements/shared/SecurityInsightsSecondary/SecurityInsightsSecondary";
import background from "/public/landing/hero.png";

const HeadingTextShowcase = dynamic(
  () => import("../src/components/HeadingTextShowcase/HeadingTextShowcase")
);
const SecurityAndPrivacy = dynamic(
  () => import("../src/elements/home/SecurityAndPrivacy/SecurityAndPrivacy")
);
const PilotYourLegacy = dynamic(
  () => import("../src/elements/home/PilotYourLegacy/PilotYourLegacy")
);
const SymbolicAndArtistic = dynamic(
  () => import("../src/elements/SymbolicAndArtistic/SymbolicAndArtistic")
);
const SuitesStepper = dynamic(
  () => import("../src/elements/home/SuitesStepper/SuitesStepper")
);
const MediaMentions = dynamic(
  () => import("../src/components/MediaMentions/MediaMentions")
);
const Tag = dynamic(() => import("../src/components/Tag/Tag"));
const Footer = dynamic(() => import("../src/components/Footer/Footer"));

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [video, setVideo] = React.useState(false);
  const watch = useMediaQuery("(max-width:500px)");
  // Heading Styes
  const boldStyle: React.CSSProperties = {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textTransform: "uppercase",
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 200);
  });
  return (
    <>
      <title>
        Digital Asset Protection & Inheritence Planning | Legacy Suite
      </title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.legacysuite.com/" />
      <meta
        property="og:title"
        content="Legacy Suite Password Manager - Protect & Organize Your Digital Life "
      />
      <meta
        property="og:description"
        content="Legacy Suite is a Digital Estate Management System designed to make sure that all of your physical & digital assets are properly accounted for & can be securely transferred to heirs. Start your free trial today."
      />
      <meta
        property="og:image"
        content="https://www.legacysuite.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLSnew.b5a7cbc4.png&w=1080&q=75"
      />
      <meta
        property="og:url"
        content="https://www.legacysuite.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLSnew.b5a7cbc4.png&w=1080&q=75"
      />
      <meta
        name="google-site-verification"
        content="Zv0yTL0Albgfown5UkXbgt-tGk4IeoZ8C4befGUj8s0"
      />
      <meta
        name="facebook-domain-verification"
        content="sollde3fvi7kso7quabrn3qcrqjrm7"
      />
      <meta
        name="title"
        content="Legacy Suite Digital Asset Management - Protect & Organize Your Digital Assets"
        key="title"
      />
      <meta
        name="description"
        content="Get the most out of your digital assets with effective management. Streamline workflows, maximize asset use, protect assets, with a centralized asset hub."
      />
      <meta
        name="keywords"
        content=" Built on the blockchain, secure your physical and digital assets, create
        a crypto will, safeguard private keys, wallet monitoring and more."
      ></meta>
      <Script
        id="schema.org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `"@context": "https://schema.org",
          "@type": "Organization",
          "name" : "LegacySuite",
          "url" : "https://www.legacysuite.com/",
          "logo" : "https://www.legacysuite.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLSnew.b5a7cbc4.png&w=1080&q=75",
            "image": "https://www.legacysuite.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLSnew.b5a7cbc4.png&w=1080&q=75",
          "description" : "Legacy Suite is a patent pending Digital Estate Management System designed to make sure that all of your physical and digital assets are properly accounted for and can be securely transferred to heirs. Take control of your legacy. Launching soon.",
          "address" : [
          {
            "@type": "PostalAddress",
            "addressCountry": "USA",
            "addressLocality": "Palo Alto",
            "addressRegion": "El Camino Real",
            "postalCode": "94306",
            "streetAddress": "3790 El Camino Real #1121,Palo Alto, CA"
          }
        ],
          "email" : "info@legacysuite.com",
          "sameAs" : [
            "https://www.instagram.com/legacy.suite/",
            "https://twitter.com/legacy_suite",
            "https://discord.gg/Ne6DefZNt6",
            "https://www.youtube.com/channel/UC1mgBZhlD9BnH57wmORtAOA"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "888-578-4836",
            "contactType": "customer service",
            "availableLanguage": ["English","English"]
          }
        `,
        }}
        async
      />
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Navbar />
          <Hero
            imageStyles={{ marginTop: { lg: "-180px", md: "-130px" } }}
            heading={
              <Typography
                variant="h2"
                component="h1"
                color={theme.palette.neutral.lighter}
                sx={{ lineHeight: { lg: "44px" } }}
              >
                <span style={{ ...boldStyle }}>BACKUP & INHERITANCE </span>
                SOLUTIONS FOR{" "}
                <span style={{ ...boldStyle }}>PROTECTING & PRESERVING </span>
                YOUR
                <span style={{ ...boldStyle }}> DIGITAL ASSETS</span>
              </Typography>
            }
            text="Legacy Suite is a digital asset management platform to help organize your assets effortlessly. Securely store, organize and protect digital assets, including digital currency, essential documents, passwords, photos, and videos."
            landingButton={true}
            image={background}
            height="700px"
          />
          <SecureByCarousel marginTop="194px !important" />
          <div
            style={{
              width: "100%",
              height: "0px",
              position: "relative",
              paddingBottom: "56.250%",
            }}
          >
            <iframe
              src="https://streamable.com/e/58xvq9?autoplay=1"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
          <WalletProtection />
          <SuitesStepper />
          <PasswordManagement />
          <SecurityInsightsSecondary />
          {/* <HeadingTextShowcase
            heading="Our Product Insights"
            text="The Legacy Suite platform makes it simple for users to safeguard important details regarding real estate, financial assets, social media accounts, email accounts, phone and computer passcodes, domain names, utilities, subscriptions, and much more."
            maxWidth="922px"
          /> */}
          <MediaMentions />
          <Glossary secondary={true} />
          <SymbolicAndArtistic />
          <Footer />
          <script
            src="https://app.wonderchat.io/scripts/wonderchat.js"
            data-name="wonderchat"
            data-address="app.wonderchat.io"
            data-id="clfst8s9w0017mc0kc9n3b4m5"
            defer
          />
          {!watch && (
            <>
              <Script
                id="facebook-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: ` !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0; 
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', 635121351649602);
                  fbq('track', 'PageView');`,
                }}
              />
            </>
          )}
        </Box>
      )}
    </>
  );
}

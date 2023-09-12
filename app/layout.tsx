"use client";

import { Box, useMediaQuery } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Poppins } from "next/font/google";
import Script from "next/script";
import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductTourButton from "../src/components/ProductTourButton/ProductTourButton";
import { MarketingModalProvider } from "../src/context/marketingModal";
import ThemeProvider from "../src/theme";
import "./globals.css";

const queryClient = new QueryClient();

const poppins = Poppins({
  weight: ["400", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const watch = useMediaQuery("(max-width:500px)");
  return (
    <html
      lang="en"
      className={poppins.className}
      style={{ scrollBehavior: "smooth", scrollPadding: "100px" }}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>
        {!watch && (
          <>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-PLV5CLX"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-4KQSZ1W8MR"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4KQSZ1W8MR');
        `}
            </Script>
          </>
        )}
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <MarketingModalProvider>
              <Box className="productTour">
                <ProductTourButton />
              </Box>
              {children}
            </MarketingModalProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer position="top-right" autoClose={5000} />
        </QueryClientProvider>
      </body>
    </html>
  );
}

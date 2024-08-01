import React from "react";
import "../app/globals.css";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import Contacts from "../components/Contacts";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Script from "next/script";

const GA_TRACKING_ID =process.env.GA_TRACKING_ID;
export default function App() {
  return (
    <React.StrictMode>
      {/* Global Site Tag (gtag.js) */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V6E83F19L8"
      ></script>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <SpeedInsights />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

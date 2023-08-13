import Head from "next/head";
import { Inter } from "next/font/google";
import { MemoizedHeader } from "../src/modules/Layout/Header/Header";
import { primary } from "@/src/SDK/theme";
import { Box } from "@mui/material";
import { MemoizedContactUs } from "@/src/modules/ContactUs/ContactUs";
import { MemoizedFooter } from "@/src/modules/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{ background: primary?.main }}>
      <Head>
        <title>Ecopay</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Box sx={{ background: primary?.main }}>
        <MemoizedHeader />
        <MemoizedContactUs />
        <MemoizedFooter />
      </Box>
    </Box>
  );
}

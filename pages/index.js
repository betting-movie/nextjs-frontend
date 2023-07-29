import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { MemoizedHeader } from "../src/modules/Layout/Header/Header";
import { primary } from "@/src/SDK/theme";
import { Box } from "@mui/material";

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
      <main className={`${styles.main} ${inter.className}`}>
        <MemoizedHeader />

        <Box sx={{ background: primary?.main }}></Box>
      </main>
    </Box>
  );
}

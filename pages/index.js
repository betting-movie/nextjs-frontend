import Head from "next/head";
import { Inter } from "next/font/google";
import { MemoizedHeader } from "../src/modules/Layout/Header/Header";
import { primary } from "@/src/SDK/theme";
import { Box } from "@mui/material";
import { MemoizedWelcomeInvesting } from "@/src/modules/Home/WelcomeInvesting";
import { MemoizedWhyEcoPlantation } from "@/src/modules/Home/WhyEcoPlantation";
import { MemoizedPlatationScope } from "@/src/modules/Home/PlatationScope";
import { MemoizedPlatationStats } from "@/src/modules/Home/PlantationStats";
import { MemoizedJoinPlantation } from "@/src/modules/Home/JoinPlantation";
import { MemoizedFooter } from "@/src/modules/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{ background: primary?.main }}>
      <Head>
        <title>Leafyprofit</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Box sx={{ background: primary?.main }}>
        <MemoizedHeader />
        <MemoizedWelcomeInvesting />
        <MemoizedWhyEcoPlantation />
        <MemoizedPlatationScope />
        <MemoizedPlatationStats />
        <MemoizedJoinPlantation />
        <MemoizedFooter />
      </Box>
    </Box>
  );
}

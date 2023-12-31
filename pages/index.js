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
        <title>Leafy Profit - Sustainable Investment Platform</title>
        <meta
          name="description"
          content="Experience 10X Assured Returns by Cultivating Your Farm and Trees with Our Expert Guidance. Start Your Journey to Sustainable Growth Today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="Leafy Profit, sustainable investment, green returns, eco-friendly profits, tree plantation investment, ethical investing, carbon credits, environmental impact, financial sustainability"
        />
        <meta name="author" content="Leafy Profit" />
        <meta name="url" content="https://www.leafyprofit.com/" />

        <meta name="robots" content="INDEX,ARCHIVE,FOLLOW" />
        <meta name="lang" content="en" />

        {/* Facebook */}
        <meta property="og:url" content="https://www.leafyprofit.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Leafy Profit - Sustainable Investment Platform"
        />
        <meta
          property="og:description"
          content="Experience 10X Assured Returns by Cultivating Your Farm and Trees with Our Expert Guidance. Start Your Journey to Sustainable Growth Today!"
        />
        <meta property="og:image" content="images/logo.svg" />
        <meta property="fb:app_id" content="5796260583761767" />
        <meta property="fb:pages" content="646488286564232" />
        {/* Twitter */}
        <meta
          name="twitter:description"
          content="Experience 10X Assured Returns by Cultivating Your Farm and Trees with Our Expert Guidance. Start Your Journey to Sustainable Growth Today!"
        />
        <meta
          name="twitter:title"
          content="Get the best price for Etrio Touro electric vehicle"
        />
        <meta name="twitter:site" content="@Leafyprofit" />
        <meta name="twitter:creator" content="@Leafyprofit" />
        <meta name="twitter:url" content="https://www.leafyprofit.com/" />

        <meta name="twitter:app:country" content="IN" />

        <link rel="canonical" href="https://www.leafyprofit.com/" />
        <link rel="icon" href="/favicon.png" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaP2) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSpeakableEtrio),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(searchWebSiteEtrio),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(etrioPrdouctSchema),
          }}
        /> */}

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

import Head from "next/head";
import { Inter } from "next/font/google";
import { MemoizedHeader } from "../../src/modules/Layout/Header/Header";
import { primary } from "@/src/SDK/theme";
import { Box, Grid, Typography } from "@mui/material";
import { MemoizedWelcomeInvesting } from "@/src/modules/Home/WelcomeInvesting";
import { MemoizedWhyEcoPlantation } from "@/src/modules/Home/WhyEcoPlantation";
import { MemoizedPlatationScope } from "@/src/modules/Home/PlatationScope";
import { MemoizedPlatationStats } from "@/src/modules/Home/PlantationStats";
import { MemoizedJoinPlantation } from "@/src/modules/Home/JoinPlantation";
import { MemoizedFooter } from "@/src/modules/Layout/Footer";
import { MemoizedPlantCard } from "@/src/modules/purchaseTrees/plantCards";
import PlantList from "@/src/modules/purchaseTrees/plantList";
import { MemoizedPlantColCard } from "@/src/modules/purchaseTrees/collectionCards";

const inter = Inter({ subsets: ["latin"] });

export default function Products() {
  const data = [
    {
      name: "Trees as a Gift",
      category: "Trending",
      price: 199,
      images: ["image_url1", "image_url2"],
      description: "Perfect gift for any occasion!",
      selectTreeOptions: [1, 5, 11, 10, 100],
      hint: "Choose the tree that suits the occasion",
      totalRatings: 104,
      ratingValue: 4.5,
      reviews: ["Great gift idea!", "Loved the concept."],
    },
    {
      name: "Trees for Reducing Carbon Footprint",
      category: "Plant a Tree",
      price: 199,
      images: ["image_url3", "image_url4"],
      description: "Help combat climate change!",
      selectTreeOptions: [1, 5, 11, 10, 100],
      hint: "Select a tree that aids in carbon reduction",
      totalRatings: 47,
      ratingValue: 4.2,
      reviews: [
        "Easy way to contribute to the environment.",
        "Highly recommended.",
      ],
    },
    {
      name: "Trees for Employees",
      category: "Gift a Tree",
      price: 199,
      images: ["image_url5", "image_url6"],
      description: "Show appreciation to your employees!",
      selectTreeOptions: [1, 5, 11, 10, 100],
      hint: "Choose a tree that represents growth and appreciation",
      totalRatings: 26,
      ratingValue: 4.1,
      reviews: ["Great corporate gift.", "Employees loved it!"],
    },

    {
      name: "Trees for Employees",
      category: "Gift a Tree",
      price: 199,
      images: ["image_url5", "image_url6"],
      description: "Show appreciation to your employees!",
      selectTreeOptions: [1, 5, 11, 10, 100],
      hint: "Choose a tree that represents growth and appreciation",
      totalRatings: 26,
      ratingValue: 4.1,
      reviews: ["Great corporate gift.", "Employees loved it!"],
    },
    // ... (continue with other categories and data)
  ];

  return (
    <Box sx={{ background: primary?.main }}>
      <Head>
        <title>Leafy Profit - Sustainable Plantation Platform</title>
        <meta
          name="description"
          content="Experience 10X Assured Returns by Cultivating Your Farm and Trees with Our Expert Guidance. Start Your Journey to Sustainable Growth Today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="Leafy Profit, sustainable Plantation, green returns, eco-friendly profits, tree plantation Plantation, ethical investing, carbon credits, environmental impact, financial sustainability"
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
          content="Leafy Profit - Sustainable Plantation Platform"
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
      <Box sx={{ background: primary?.white }}>
        <MemoizedHeader />

        <Box
          display={"block"}
          justifyContent={"center"}
          sx={{
            margin: {
              lg: "0px 80px 20px 80px",
              md: "16px 60px 16px 60px",
              sm: "10px 20px 10px 20px",
              xs: "12px",
            },
            paddingTop: { lg: "40px", md: "30px", sm: "20px", xs: "12px" },
          }}
        >
          <Typography
            style={{
              fontSize: "28px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            Products{" "}
          </Typography>

          <Grid container spacing={4}>
            {data.map((res, index) => (
              <Grid item key={index} xs={6} sm={4} md={4} lg={3}>
                <MemoizedPlantCard info={res} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* <MemoizedWelcomeInvesting />
        <PlantList data={data} />
        <MemoizedPlantColCard info={data[0]} />

       
        <MemoizedWhyEcoPlantation />
        <MemoizedPlatationScope />
        <MemoizedPlatationStats />
        <MemoizedJoinPlantation /> */}
        <MemoizedFooter />
      </Box>
    </Box>
  );
}

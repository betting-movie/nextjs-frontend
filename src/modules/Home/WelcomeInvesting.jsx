import { CustomStepper } from "@/src/SDK/Stepper";
import { primary } from "@/src/SDK/theme";
import { statsData } from "@/src/constant/StatData";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const CustomWelcomeInvesting = styled(Box)(({ theme }) => ({
  padding: "30px",
  paddingLeft: "70px",
  paddingTop: "50px",

  ".heading": {
    color: primary?.white,
    fontSize: "60px",
    fontWeight: "700",
    lineHeight: "70px",
    letterSpacing: "0px",
    textAlign: "left",
    marginBottom: "20px",
  },

  ".subHeading": {
    color: primary?.white,
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "57px",
    textAlign: "left",
    marginBottom: "20px",
  },

  ".cta": {
    fontSize: "20px",
    marginBottom: "20px",
  },

  ".stats-data": {
    fontWeight: "600",
    fontSize: "54px",
    color: primary?.white,
  },
  ".stats-name": {
    fontWeight: "600",
    fontSize: "20px",
    color: primary?.white,
  },
  ".stats-image": {
    height: "70px",
    marginRight: "10px",
    marginTop: "14px",
  },
  ".grid-container": {
    ///width: "90%",
    margin: "auto",
  },

  [theme.breakpoints.down("md")]: {
    padding: "10px",
    paddingLeft: "20px",
    paddingTop: "30px",

    ".heading": {
      color: primary?.white,
      fontSize: "32px",
      fontWeight: "700",
      lineHeight: "50px",
      letterSpacing: "0px",
      textAlign: "left",
      marginBottom: "10px",
    },

    ".subHeading": {
      color: primary?.white,
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "21px",
      textAlign: "left",
      marginBottom: "20px",
    },

    ".cta": {
      marginBottom: "10px",
      fontSize: "18px",
    },

    ".stats-data": {
      fontSize: "21px",
    },
    ".stats-name": {
      fontSize: "10px",
    },

    ".stats-image": {
      width: "50px",
      marginTop: "10px",
    },
    ".grid-container": {
      marginBottom: "20px",
      //width: "80%",
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    paddingLeft: "20px",
    paddingTop: "20px",
    ".heading": {
      color: primary?.white,
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "36px",
      letterSpacing: "0px",
      textAlign: "left",
      marginBottom: "10px",
    },

    ".subHeading": {
      color: primary?.white,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "21px",
      textAlign: "left",
      marginBottom: "10px",
    },

    ".cta": {
      marginBottom: "10px",
      fontSize: "14px",
    },

    ".stats-data": {
      fontSize: "21px",
    },
    ".stats-name": {
      fontSize: "10px",
    },

    ".stats-image": {
      height: "50px",

      marginTop: "10px",
    },
  },
}));

const WelcomeInvesting = () => {
  const navigate = useRouter();
  return (
    <CustomWelcomeInvesting id="welcomeinvesting">
      <Grid container>
        <Grid item md={6}>
          <Box>
            <Typography variant="h1" className="heading">
              <span style={{ color: primary.fantaOrange }}>
                Unlocking Nature's Wealth{" "}
              </span>
              Invest in Green Returns with Leafy Profit
            </Typography>

            <Typography variant="h2" className="subHeading">
              Cultivate Green | Harvest Profit | Grow Your Investment
            </Typography>
            <Button
              className="cta"
              onClick={() => {
                navigate.push("/contact-us");
              }}
            >
              Invest Now
            </Button>

            <Box className="grid-container">
              <Grid container spacing={2}>
                {statsData
                  ?.filter((data) => {
                    return data?.id < 3;
                  })
                  .map((stats) => (
                    <Grid item sm={6} lg={6} key={stats?.id}>
                      <Box>
                        <img src={stats.img} className="stats-image" />
                      </Box>

                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                      >
                        <Typography className="stats-data">
                          {stats?.data}
                        </Typography>
                        <Typography className="stats-name">
                          {stats?.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <img src={"/images/MapDesktop.webp"} style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>

      {/* <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Typography
          variant="h3"
          className="subHeading"
          style={{ lineHeight: "30px", marginTop: "20px" }}
        >
          <span style={{ color: primary.darkYellow }}>
            Invest in nature to yield financial rewards,
          </span>
          Investing with Leafy Profit offers a unique and compelling opportunity
          for individuals and businesses for several reasons{" "}
          <span style={{ color: primary.fantaGrey }}>Grow Green Profit</span>
          <span >Grow Oxygen </span>
          <span style={{ color: primary.fantaOrange }}>Grow Your Farm</span>
          <span>Grow your forest</span>
          <span style={{ color: primary.darkYellow }}>Get a way to harness your kids with agri cultivation</span>
          <span>Gift a tree to your beloved ones</span>
        </Typography>
      </Box> */}

      {/* <Box>
        <Typography>“Invest in nature to yield financial rewards”</Typography>

        <Typography>“Invest in nature to yield financial rewards”</Typography>
      </Box> */}
    </CustomWelcomeInvesting>
  );
};

export const MemoizedWelcomeInvesting = React.memo(WelcomeInvesting);

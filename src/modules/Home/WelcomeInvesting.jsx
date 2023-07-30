import { primary } from "@/src/SDK/theme";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";

const CustomWelcomeInvesting = styled(Box)(({ theme }) => ({
  padding: "30px",
  paddingLeft: "70px",
  paddingTop: "50px",

  ".heading": {
    color: primary?.white,
    fontSize: "80px",
    fontWeight: "700",
    lineHeight: "96px",
    letterSpacing: "0px",
    textAlign: "left",
    marginBottom: "20px",
  },

  ".subHeading": {
    color: primary?.white,
    fontSize: "38px",
    fontWeight: "400",
    lineHeight: "57px",
    textAlign: "left",
    marginBottom: "20px",
  },

  ".cta": {
    fontSize: "20px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "10px",
    paddingLeft: "20px",
    paddingTop: "30px",

    ".heading": {
      color: primary?.white,
      fontSize: "40px",
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
  },
}));

const WelcomeInvesting = () => {
  return (
    <CustomWelcomeInvesting>
      <Grid container>
        <Grid item md={6}>
          <Box>
            <Typography className="heading">
              Welcome to the smart investing
            </Typography>

            <Typography className="subHeading">
              Plant tree | Help Nature | Profit Investment
            </Typography>
            <Button className="cta">Invest Now</Button>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <img src={"/images/MapDesktop.webp"} style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </CustomWelcomeInvesting>
  );
};

export const MemoizedWelcomeInvesting = React.memo(WelcomeInvesting);

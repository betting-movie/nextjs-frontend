import { primary } from "@/src/SDK/theme";
import { statsData } from "@/src/constant/StatData";
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
    marginBottom:"20px"
  },

  ".stats-data": {
    fontWeight: "600",
    fontSize: "54px",
    color: "#fff",
  },
  ".stats-name": {
    fontWeight: "600",
    fontSize: "20px",
    color: "#fff",
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
        marginBottom:"20px"
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

            <Box className="grid-container">
          <Grid
            container
           spacing={2}
    //sx={{ p: { xs: "16px 16px 16px 24px", md: "1px 0px 64px 0px" } }}


          >
            {statsData?.filter((data)=>{return (data?.id<3)}).map((stats) => (
              <Grid item sm={6} lg={6} key={stats?.id}>
                <Box>
                  <img src={stats.img} className="stats-image" />
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
                  <Typography className="stats-data">{stats?.data}</Typography>
                  <Typography className="stats-name">{stats?.name}</Typography>
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
    </CustomWelcomeInvesting>
  );
};

export const MemoizedWelcomeInvesting = React.memo(WelcomeInvesting);

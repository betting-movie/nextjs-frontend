import { primary } from "@/src/SDK/theme";
import { statsData } from "@/src/constant/StatData";
import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";

const CustomPlatationStats = styled(Box)(({ theme }) => ({
  background: "#fff",
  ".stats-heading": {
    fontWeight: "700",
    fontSize: "20px",
    textAlign: "center",
    color: primary?.darkYellow,
    paddingTop: "40px",
  },
  ".calc-data": {
    fontWeight: "600",
    fontSize: "200px",
    textAlign: "center",
    color: primary?.white,
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
    width: "70px",
    paddingLeft: "20px",
    marginRight: "10px",
    marginTop: "14px",
  },
  ".grid-container": {
    width: "90%",
    margin: "auto",
  },
  [theme.breakpoints.down("md")]: {
    ".stats-heading": {
      fontSize: "10px",
      lineHeight: "15px",
      width: "60%",
      margin: "auto",
    },
    ".stats-data": {
      fontSize: "21px",
    },
    ".stats-name": {
      fontSize: "10px",
    },
    ".calc-data": {
      fontSize: "66px",
    },
    ".stats-image": {
      width: "50px",
      marginTop: "10px",
    },
    ".grid-container": {
      width: "80%",
    },
  },

  [theme.breakpoints.down("sm")]: {
    ".grid-container": {
      width: "100%",
    },
  },
}));

const PlatationStats = () => {
  return (
    <CustomPlatationStats id="plantationstat">
      <Box sx={{ background: primary?.main }}>
        <Box>
          <Typography className="stats-heading">
            Leafyprofit COMMUNITY'S TREES: TOTAL PROFIT AND IMPACT
          </Typography>
          <Typography className="calc-data">{"20,74,890"}</Typography>
        </Box>
        <Box className="grid-container">
          <Grid
            container
            spacing={2}
            sx={{ p: { xs: "16px 16px 16px 24px", md: "1px 0px 64px 0px" } }}
          >
            {statsData?.map((stats) => (
              <Grid item sm={2} lg={3} key={stats?.id}>
                <Box>
                  <img src={stats?.img} className="stats-image" />
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
      <img
        src={"/images/BottomCurves.svg"}
        width="100%"
        style={{ marginTop: "-10px" }}
      />
    </CustomPlatationStats>
  );
};

export const MemoizedPlatationStats = React.memo(PlatationStats);

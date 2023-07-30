import { primary } from "@/src/SDK/theme";
import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";

const statsData = [
  {
    id: 1,
    name: "total plantation",
    img: "/images/pinkPlant.png",
    data: "2074.0",
  },
  {
    id: 2,
    name: "total profit",
    img: "/images/Coin.svg",
    data: "124476.0",
  },
  {
    id: 3,
    name: "cities involved",
    img: "/images/MapIcon.webp",
    data: "10+",
  },
  {
    id: 4,
    name: "species",
    img: "/images/yellowPlant.png",
    data: "70+",
  },
];

const CustomPlatationStats = styled(Box)(({ theme }) => ({
  background: "#fff",
  ".stats-heading": {
    fontWeight: "700",
    fontSize: "20px",
    textAlign: "center",
    color: "#FDCE10",
    paddingTop: "40px",
  },
  ".calc-data": {
    fontWeight: "600",
    fontSize: "200px",
    textAlign: "center",
    color: "#fff",
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
    <CustomPlatationStats>
      <Box sx={{ background: primary.main }}>
        <Box>
          <Typography className="stats-heading">
            ECOPAY COMMUNITY'S TREES: TOTAL PROFIT AND IMPACT
          </Typography>
          <Typography className="calc-data">{"20,74,890"}</Typography>
        </Box>
        <Box className="grid-container">
          <Grid
            container
            spacing={2}
            sx={{ p: { xs: "16px 16px 16px 24px", md: "1px 0px 64px 0px" } }}
          >
            {statsData.map((stats) => (
              <Grid item sm={2} lg={3} key={stats.id}>
                <Box>
                  <img src={stats.img} className="stats-image" />
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
                  <Typography className="stats-data">{stats.data}</Typography>
                  <Typography className="stats-name">{stats.name}</Typography>
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

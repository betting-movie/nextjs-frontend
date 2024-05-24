import { CustomStepper } from "@/src/SDK/Stepper";
import { WhyEcoPlantationData } from "@/src/constant/StatData";
import { Box, Grid, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { primary } from "@/src/SDK/theme";

const CustomWhyEcoPlantation = styled(Box)(({ theme }) => ({

  // margin:"-6em",
  // position:"absolute",
  ".layout": {
    padding: "30px",
    paddingLeft: "70px",
    paddingBottom: "0px",
    paddingTop: "70px",
    background: primary?.white,
  },

  ".headerInfo": {
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "60px",
    letterSpacing: "0em",
    textAlign: "left",
    color: primary?.main,
  },

  ".subHeader": {
    fontSize: "25px",
    fontWeight: "600",
    lineHeight: "38px",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "50px",
    marginTop: "20px",
  },

  ".detail": {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "27px",
    letterSpacing: "0em",
    textAlign: "left",
    height: "150px",
  },

  ".footer-plant-style": {
    width: "100%",
    marginBottom: "-20px",
    background: primary?.white,
  },
  ".footer-bottom-curve": {
    width: "100%",
    marginTop: "-550px",
  },

  ".image-layout": {
    maxHeight: "300px",
    width: "100%",
  },

  [theme.breakpoints.down("md")]: {
    ".layout": {
      padding: "10px",
    },

    ".headerInfo": {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "45px",
      letterSpacing: "0em",
      textAlign: "center",
    },

    ".subHeader": {
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "center",
      marginTop: "20px",
    },

    ".detail": {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "center",
      marginTop: "10px",
      height: "75px",
    },
    ".footer-plant-style": {
      marginBottom: "-24px",
      background: primary?.white,
    },

    ".footer-bottom-curve": {
      width: "100%",
      marginTop: "-250px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    ".layout": {
      padding: "10px",

      paddingBottom: "0px",
    },

    ".headerInfo": {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "45px",
      letterSpacing: "0em",
      textAlign: "center",
    },

    ".subHeader": {
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "center",
      marginTop: "20px",
    },

    ".detail": {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "center",
      marginTop: "10px",
    },
    ".footer-plant-style": {
      marginBottom: "-24px",
      background: primary?.white,
    },

    ".footer-bottom-curve": {
      marginTop: "-64px",
    },
  },
}));

const WhyEcoPlantation = () => {
  const [selectedInfo, setSelectedInfo] = useState(0);
  return (
    <>
      <CustomWhyEcoPlantation id="whyLeafyprofit">
        <Box className="layout">
          <Grid container>
            <Grid
              item
              md={6}
              order={{ xs: 2, sm: 2, md: 1 }}
              style={{ width: "100%" }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  className="image-layout"
                  src={WhyEcoPlantationData[selectedInfo]?.img}
                />
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              order={{ xs: 1, sm: 1, md: 2 }}
              style={{ width: "100%" }}
            >
              <Box>
                <Typography className="headerInfo">
                 Save Nature with Leafyprofit
                </Typography>
                <Typography className="subHeader">
                  {WhyEcoPlantationData[selectedInfo]?.PlantationPurpose}
                </Typography>
                <Typography className="detail">
                  {WhyEcoPlantationData[selectedInfo]?.detail}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { md: "start", sm: "center", xs: "center" },
                    marginBottom: { xs: "10px", sm: "10px" },
                  }}
                >
                  <ArrowCircleLeftOutlinedIcon
                    style={{
                      marginTop: "15px",
                      fontSize: "30px",
                      color: primary?.main,
                    }}
                    onClick={() => {
                      if (selectedInfo > 0) {
                        setSelectedInfo(selectedInfo - 1);
                      }
                    }}
                  />

                  <CustomStepper step={selectedInfo + 1} inputSteps={4} />
                  <ArrowCircleRightOutlinedIcon
                    style={{
                      marginTop: "15px",
                      fontSize: "30px",
                      color: primary?.main,
                    }}
                    onClick={() => {
                      if (selectedInfo < 3) {
                        setSelectedInfo(selectedInfo + 1);
                      }
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            background: primary?.white,
            padding: { xs: "20px", sm: "20px", md: "60px" },
          }}
        ></Box>

        <img
          src={"/images/PlantGroup.svg"}
          alt="Pant Group"
          className="footer-plant-style"
        />
        <img
          src={"/images/TopCurves.svg"}
          alt="Pant Group"
          className="footer-bottom-curve"
          width={"100%"}
        />
      </CustomWhyEcoPlantation>
    </>
  );
};

export const MemoizedWhyEcoPlantation = React.memo(WhyEcoPlantation);

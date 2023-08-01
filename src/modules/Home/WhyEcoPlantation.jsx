import { WhyEcoPlantationData } from "@/src/constant/StatData";
import { Box, Grid, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const CustomWhyEcoPlantation = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const WhyEcoPlantation = () => {
  const [selectedInfo, setSelectedInfo] = useState(0);
  return (
    <CustomWhyEcoPlantation>
      <Grid container>
        <Grid item md={6}>
          <Box>
            <img
              src={WhyEcoPlantationData[selectedInfo]?.img}
              className="stats-image"
            />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Typography>Why Switch to Ecopay?</Typography>
            <Typography>
              {WhyEcoPlantationData[selectedInfo]?.investmentPurpose}
            </Typography>
            <Typography>
              {WhyEcoPlantationData[selectedInfo]?.detail}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CustomWhyEcoPlantation>
  );
};

export const MemoizedWhyEcoPlantation = React.memo(WhyEcoPlantation);

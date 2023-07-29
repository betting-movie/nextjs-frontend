import { Box, styled } from "@mui/material";
import React from "react";

const CustomWhyEcoPlantation = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const WhyEcoPlantation = () => {
  return <CustomWhyEcoPlantation>WhyEcoPlantation</CustomWhyEcoPlantation>;
};

export const MemoizedWhyEcoPlantation = React.memo(WhyEcoPlantation);

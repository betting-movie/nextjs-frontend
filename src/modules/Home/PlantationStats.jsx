import { Box, styled } from "@mui/material";
import React from "react";

const CustomPlatationStats = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const PlatationStats = () => {
  return <CustomPlatationStats>PlatationStats</CustomPlatationStats>;
};

export const MemoizedPlatationStats = React.memo(PlatationStats);

import { Box, styled } from "@mui/material";
import React from "react";

const CustomPlatationScope = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const PlatationScope = () => {
  return <CustomPlatationScope>PlatationScope</CustomPlatationScope>;
};

export const MemoizedPlatationScope = React.memo(PlatationScope);

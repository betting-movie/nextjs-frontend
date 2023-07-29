import { Box, styled } from "@mui/material";
import React from "react";

const CustomJoinPlantation = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const JoinPlantation = () => {
  return <CustomJoinPlantation>JoinPlantation</CustomJoinPlantation>;
};

export const MemoizedJoinPlantation = React.memo(JoinPlantation);

import { Box, styled } from "@mui/material";
import React from "react";

const CustomWelcomeInvesting = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const WelcomeInvesting = () => {
  return <CustomWelcomeInvesting>WelcomeInvesting</CustomWelcomeInvesting>;
};

export const MemoizedWelcomeInvesting = React.memo(WelcomeInvesting);

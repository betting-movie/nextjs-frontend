import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";

const CustomWelcomeInvesting = styled(Box)(({ theme }) => ({
  padding: "30px",

  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const WelcomeInvesting = () => {
  return (
    <CustomWelcomeInvesting>
      <Grid container>
        <Grid item md={6}>
          <Box>
            <Typography>Welcome to the smart investing</Typography>

            <Typography>
              Plant tree | Help Nature | Profit Investment
            </Typography>
            <Button style={{}}>Invest Now</Button>
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

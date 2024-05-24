import { Box, Button, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { primary } from "@/src/SDK/theme";
import { Facebook, YouTube } from "@mui/icons-material";
import { useRouter } from "next/router";

const Icon = [
  {
    id: 1,
    name: <InstagramIcon />,
  },
  {
    id: 2,
    name: <YouTube />,
  },
  {
    id: 3,
    name: <TwitterIcon />,
  },
  {
    id: 4,
    name: <LinkedInIcon />,
  },
  {
    id: 5,
    name: <Facebook />,
  },
];

const CustomJoinPlantation = styled(Box)(({ theme }) => ({
  background: "#fff",
  // margin:"-6em",
  // position:"absolute",
  ".join-heading": {
    color: primary?.main,
  },
  ".join-invest-button": {
    borderRadius: "73px",
    fontWeight: "600",
    textAlign: "center",
    fontSize: "14px",
    padding: "10px 20px 10px 20px",
  },
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const JoinPlantation = () => {
  const navigate = useRouter();
  return (
    <CustomJoinPlantation id="jointoday">
      <Box
        sx={{
          padding: { xs: "10px 20px", md: "90px 60px" },
          width: { xs: "90%", md: "65%" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "58px" },
            paddingBottom: { xs: "10px" },
            fontWeight: "700",
          }}
          className="join-heading"
        >
          Join Leafyprofit Today and Make the Switch!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "10px", md: "16px" },
            fontWeight: "500",
            color: primary?.mainText,
          }}
        >
          Join Leafyprofit Today and Make the Switch!
          <br /> By choosing Leafyprofit, you become a catalyst for change. Your
          Plantation dollars become a force for good, contributing to a world
          that prioritizes environmental conservation, social progress, and
          responsible economic growth. Switch to Leafyprofit today and take the
          first step towards a brighter, greener, and more sustainable future.
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { xs: "10px 20px", md: "20px 60px" },
          display: "flex",
          justifyContent: { md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          marginTop: { md: "-80px" },
        }}
      >
        <Box>
          <Button
            variant="contained"
            className="join-invest-button"
            onClick={() => {
              navigate.push("/contact-us");
            }}
          >
            Invest Now
          </Button>
        </Box>
        <Box
          className="media-icon-container"
          style={{ display: "flex", flexDirection: "row" }}
          sx={{ paddingTop: { xs: "20px" } }}
        >
          {Icon?.map((icon, index) => (
            <Box key={icon?.id}>
              <IconButton
                variant="contained"
                sx={{
                  borderRadius: "50%",
                  background: primary?.darkGrey,
                  color: primary?.white,
                  margin: "2px",
                }}
                key={icon?.id}
              >
                {icon?.name}
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </CustomJoinPlantation>
  );
};

export const MemoizedJoinPlantation = React.memo(JoinPlantation);

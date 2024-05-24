import { Box, Rating, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { useRouter } from "next/router";
import { MemoizedInfoCard } from "@/src/SDK/cards/infoCards";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomPlantColCard = styled(Box)(({ theme }) => ({
  display: "block",
  //padding: "20px",
  //maxHeight: "400px",
  //width: "100% !important",
  maxWidth: "260px",
  background: primary?.white,

  ".heading": {
    fontSize: "2em",
    fontWeight: "600",
  },

  ".subHeading": {
    fontSize: "1em",
    fontWeight: "400",
  },

  [theme.breakpoints.down("sm")]: {
    ".heading": {
      fontSize: "1.2em",
    },
    ".subHeading": {
      fontSize: "0.8em",
      fontWeight: "400",
    },
  },
}));

const PlantColCard = ({ info, id }) => {
  const navigate = useRouter();

  return (
    <MemoizedInfoCard>
      <CustomPlantColCard id={id}>
        <Box style={{ justifyContent: "space-between" }}>
          <LazyLoadImage
            src={"/images/testImage.webp"}
            style={{
              maxHeight: "260px",
              maxWidth: "260px",
              objectFit: "cover",
              width: "100%",
            }}
          />

          <Box sx={{ padding: "10px" }}>
            <Typography
              style={{
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px",
                paddingBottom: "0.2rem",
                color: primary.main,
              }}
            >
              {info?.category} →
            </Typography>
          </Box>
        </Box>
      </CustomPlantColCard>
    </MemoizedInfoCard>
  );
};

export const MemoizedPlantColCard = React.memo(PlantColCard);

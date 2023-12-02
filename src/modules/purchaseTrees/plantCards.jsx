import { Box, Rating, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { useRouter } from "next/router";
import { MemoizedInfoCard } from "@/src/SDK/cards/infoCards";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomPlantCard = styled(Box)(({ theme }) => ({
  display: "block",
  //padding: "20px",
  //maxHeight: "400px",
  //width: "100% !important",
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

const PlantCard = ({ info, id }) => {
  const navigate = useRouter();

  return (
    <MemoizedInfoCard>
      <CustomPlantCard id={id}>
        <Box style={{ justifyContent: "space-between" }}>
          <LazyLoadImage
            src={"/images/testImage.webp"}
            style={{ objectFit: "cover", width: "100%" }}
          />

          <Box sx={{ padding: "10px" }}>
            <Typography
              style={{
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24px",
                paddingBottom: "0.2rem",
              }}
            >
              {info?.name}
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,

                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              {info?.category}
            </Typography>
            <Typography
              style={{
                fontSize: "18px",
                fontStyle: "700",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              ₹ {info?.price}
            </Typography>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              style={{ fontSize: "14px", width: "100%" }}
            >
              <Box display={"inline-flex"} sx={{ marginTop: "8px" }}>
                <Rating
                  name="read-only"
                  value={info?.ratingValue}
                  readOnly
                  style={{ marginRight: "4px", fontSize: "20px" }}
                />{" "}
                {info?.totalRatings}
              </Box>
            </Box>
            <Box sx={{ marginTop: "8px" }}>
              {/* <Typography style={{color:primary?.main, fontWeight:"600"}}>Plant Now →</Typography> */}
              <MemoizedButton
                content={"Plant Now"}
                sx={{ fontSize: "12px", padding: "8px" }}
              />
            </Box>
          </Box>
        </Box>
      </CustomPlantCard>
    </MemoizedInfoCard>
  );
};

export const MemoizedPlantCard = React.memo(PlantCard);

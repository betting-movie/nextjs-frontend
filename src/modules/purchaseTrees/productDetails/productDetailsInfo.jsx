import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import ImageSlider from "../imageSlider";
import React from "react";
import { primary } from "@/src/SDK/theme";

import { MemoizedButton } from "@/src/SDK";

const ProductDetailsInfo = ({ data }) => {
  return (
    <Box
      display={"block"}
      justifyContent={"center"}
      sx={{
        margin: {
          lg: "0px 80px 20px 80px",
          md: "16px 60px 16px 60px",
          sm: "10px 20px 10px 20px",
          xs: "12px",
        },
        paddingTop: { lg: "40px", md: "30px", sm: "20px", xs: "12px" },
      }}
    >
      <Grid container spacing={4} style={{ width: "100%" }}>
        <Grid item xs={12} sm={6} md={6} lg={6} display={"flex"}>
          <Box style={{ width: "100%", maxHeight: "500px" }}>
            {" "}
            <ImageSlider />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography
              style={{
                fontSize: "28px",
                fontWeight: "500",
                margin: "10px",
              }}
            >
              {data?.name}
            </Typography>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              style={{ fontSize: "14px", width: "100%", margin: "10px", }}
            >
              <Box display={"inline-flex"} sx={{ marginTop: "8px" }}>
                <Rating
                  name="read-only"
                  value={data?.ratingValue}
                  readOnly
                  style={{ marginRight: "4px", fontSize: "20px" }}
                />{" "}
                {data?.totalRatings}
              </Box>
            </Box>

            <Typography
              style={{
                fontSize: "18px",
                fontStyle: "700",
                fontWeight: 400,
                lineHeight: "26px",
                margin: "10px",
              }}
            >
              ₹ {data?.price}
            </Typography>

            <Typography style={{margin: "10px",}}>Select trees for your forest </Typography>
            <Box sx={{margin: "10px",}}>
              {data?.selectTreeOptions?.map((res, index) => {
                return (
                  <Button
                    key={index}
                    variant="h2"
                    sx={{
                      background: "white",
                      color: primary.main,
                      border: `1px solid ${primary.main}`,
                      padding: "6px",
                      margin: "10px",
                    }}
                    // onClick={() => {
                    //   navigate.push(res.path);
                    // }}
                  >
                    {" "}
                    <Typography
                      variant="h2"
                      style={{ fontSize: "14px", fontWeight: "600",margin: "10px", }}
                    >
                      {res}
                    </Typography>
                  </Button>
                );
              })}
            </Box>

            <Typography style={{margin: "10px",}}>Hint: {data?.hint}</Typography>

            <MemoizedButton content={"Add to Forest"}  sx={{margin: "10px",}}/>

            
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Typography style={{
                fontSize: "28px",
                fontWeight: "500",
                
              }}>Description</Typography>
        <Typography>{data?.description} , Planting trees on your birthday can be a meaningful and environmentally friendly way to celebrate and make a positive impact on the planet. By planting trees and sharing your experience with others, you can inspire others to take action and positively impact the environment.</Typography>
      </Box>

      {/* <Grid container spacing={4}>
            {data.map((res, index) => (
              <Grid item key={index} xs={6} sm={4} md={4} lg={3}>
                <MemoizedPlantCard info={res} />
              </Grid>
            ))}
          </Grid> */}
    </Box>
  );
};

export const MemoProductDetailsInfo = React.memo(ProductDetailsInfo);

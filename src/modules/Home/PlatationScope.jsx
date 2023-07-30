import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const cardData = [
  {
    id: "34564dsgfdhgf",
    img: "/images/ScopeCardImage/GreenLegacy.webp",
    heading: "Choose Your Tree, Leave a Green Legacy",
    desc: "At ecopay, we understand that sustainability is a personal commitment. That's why we empower you to choose the tree that resonates with your values and aspirations.",
    color: "#FDCE10",
  },
  {
    id: "34564d46546sgfdhgf",
    img: "/images/ScopeCardImage/Bountful.webp",
    heading: "Expert Care and Bountiful Results",
    desc: "Once your tree is planted, you can rest assured that our dedicated team will provide expert care and attention throughout its life cycle. From nurturing to fostering growth, we'll ensure your tree thrives, becoming a fruitful source of benefits.",
    color: "#FE9C8F",
  },
  {
    id: "345689794dsgfdhgf",
    img: "/images/ScopeCardImage/BussinessProfit.webp",
    heading: "Unlock Business Potential and Profit",
    desc: "we'll harness business opportunities arising from your tree, sharing 70% of the profits with you for every sale made.",
    color: "#57BC86",
  },
];

const CustomPlatationScope = styled(Box)(({ theme }) => ({
  padding: "30px",
  ".card-heading": {
    fontWeight: "700",
    fontSize: "24px",
    color: "#333333",
    lineHeight: "36px",
  },
  ".card-description": {
    fontWeight: "400",
    fontSize: "14px",
    color: "#333333",
    marginTop: "10px",
    lineHeight: "21px",
    height: "80px",
  },
  ".platation-scope-heading": {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#FDCE10",
    textAlign: "center",
  },
  ".platation-scope-description": {
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "60px",
    color: "#FFFFFF",
    textAlign: "center",
    width: "80%",
    margin: "auto",
    padding: "40px 20px 60px 20px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
    ".card-heading": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    ".card-description": {
      fontSize: "12px",
      lineHeight: "18px",
      height: "40px",
    },
    ".platation-scope-heading": {
      fontSize: "10px",
      lineHeight: "15px",
      padding: "10px 14px 8px 14px",
    },
    ".platation-scope-description": {
      fontSize: "20px",
      lineHeight: "30px",
      width: "100%",
      padding: "10px 14px 8px 14px",
    },
  },

  [theme.breakpoints.down("sm")]: {},
}));

const PlatationScope = () => {
  return (
    <CustomPlatationScope>
      <Box>
        <Typography className="platation-scope-heading">
          HOW OUR TREES PLANTATION MAKE YOUR MONEY?
        </Typography>
        <Typography className="platation-scope-description">
          We plant in 10+ Cities through Profitable Future Investment with
          future investment grow and nature{" "}
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ p: { xs: "16px 16px 16px 24px", md: "1px 40px 4px 100px" } }}
      >
        {cardData.map((data) => (
          <Grid item sm={12} lg={4} key={data?.id}>
            <Card
              sx={{
                borderRadius: "25px",
                background: data.color,
                maxWidth: 385,
              }}
            >
              <CardMedia
                image={data?.img}
                sx={{ height: { sm: "300px", md: "350px", xs: "300px" } }}
              />
              <CardContent
                sx={{
                  p: { xs: "16px 20px 16px 24px", md: "20px 38px 10px 30px" },
                }}
              >
                <Typography className="card-heading">{data.heading}</Typography>
                <Typography className="card-description">
                  {data.desc}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  p: { xs: "16px 16px 16px 24px", md: "0px 30px 20px 30px" },
                }}
              >
                <Button
                  disableElevation
                  sx={{
                    padding: "15px, 36px, 15px, 36px",
                    borderRadius: "100px",
                    background: data.color,
                    color: "#333",
                    border: "1px solid #333",
                    marginTop: "50px",
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CustomPlatationScope>
  );
};

export const MemoizedPlatationScope = React.memo(PlatationScope);

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
    img: "/images/ScopeCardImage/GreenLegacy.svg",
    bgImage: "/images/ScopeCardImage/YellowCurve.svg",
    heading: "Choose Your Tree, Leave a Green Legacy",
    desc: "At ecopay, we understand that sustainability is a personal commitment. That's why we empower you to choose the tree that resonates with your values and aspirations.",
    color: "#FDCE10",
  },
  {
    id: "34564d46546sgfdhgf",
    img: "/images/ScopeCardImage/Bountful.svg",
    bgImage: "/images/ScopeCardImage/PinkCurve.svg",
    heading: "Expert Care and Bountiful Results",
    desc: "Once your tree is planted, you can rest assured that our dedicated team will provide expert care and attention throughout its life cycle. From nurturing to fostering growth, we'll ensure your tree thrives, becoming a fruitful source of benefits.",
    color: "#FE9C8F",
  },
  {
    id: "345689794dsgfdhgf",
    img: "/images/ScopeCardImage/BussinessProfit.svg",
    bgImage: "/images/ScopeCardImage/GreenCurve.svg",
    heading: "Unlock Business Potential and Profit",
    desc: "we'll harness business opportunities arising from your tree, sharing 70% of the profits with you for every sale made.",
    color: "#008080",
  },
];

const CustomPlatationScope = styled(Box)(({ theme }) => ({
  ".card-heading": {
    fontWeight: "700",
    fontSize: "24px",
    color: "#333333",
  },
  ".card-description": {
    fontWeight: "400",
    fontSize: "16px",
    color: "#333333",
  },
  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

const PlatationScope = () => {
  return (
    <CustomPlatationScope>
      <Box>
        <Typography>HOW OUR TREES PLANTATION MAKE YOUR MONEY?</Typography>
        <Typography>
          We plant in 10+ Cities through Profitable Future Investment with
          future investment grow and nature{" "}
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        sx={{ p: { xs: "16px 16px 16px 24px", md: "1px 40px 64px 120px" } }}
      >
        {cardData.map((data) => (
          <Grid item sx={12} lg={4} key={data.id}>
            <Card
              sx={{
                borderRadius: "25px",
                background: data.color,
                maxWidth: 350,
              }}
            >
              <CardMedia image={data.img} sx={{ height: 250 }} />
              <CardContent>
                <Typography className="card-heading">{data.heading}</Typography>
                <Typography className="card-description">
                  {data.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CustomPlatationScope>
  );
};

export const MemoizedPlatationScope = React.memo(PlatationScope);

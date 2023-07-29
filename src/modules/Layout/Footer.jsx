import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { primary } from "@/src/SDK/theme";
import Link from "next/link";

const CustomFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  paddingBottom: "24px",
  border: "1px solid red",
  marginTop: "15rem",
  ".footer-heading": {
    color: primary.main,
  },
  ".footer-invest-button": {
    backgroundColor: "#FE9C8F",
    borderRadius: "73px",
    fontWeight: "600",
    textAlign: "center",
    fontSize: "14px",
    padding: "10px 20px 10px 20px",
  },
  ".heading": {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "1.1em",
    color: "#000000",
    marginBottom: "12px",
  },
  ".sub-data": {
    fontWeight: "400",
    fontSize: "16px",
    color: "#000000",
  },
  [theme.breakpoints.down("md")]: {
    ".heading": {
      fontSize: "8px",
    },
    ".sub-data": {
      fontSize: "4px",
    },
  },
}));
const Footer = () => {
  const navigate = useRouter();
  return (
    <CustomFooter>
      <Box>
        <Box
          sx={{
            padding: { xs: "10px 20px", md: "100px 60px" },
            width: { xs: "90%", md: "65%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "58px" },
              paddingBottom: { xs: "10px" },
              fontWeight: "700",
            }}
            className="footer-heading"
          >
            Join Ecopay Today and Make the Switch!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "16px" },
              fontWeight: "500",
              color: primary.mainText,
            }}
          >
            Join Ecopay Today and Make the Switch!
            <br /> By choosing Ecopay, you become a catalyst for change. Your
            investment dollars become a force for good, contributing to a world
            that prioritizes environmental conservation, social progress, and
            responsible economic growth. Switch to Ecopay today and take the
            first step towards a brighter, greener, and more sustainable future.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: { xs: "0px 20px", md: "0px 60px" },
            display: "flex",
            justifyContent: { md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            marginTop: { md: "-60px" },
          }}
        >
          <Box>
            <Button variant="contained" className="footer-invest-button">
              Invest Now
            </Button>
          </Box>
          <Box
            className="media-icon-container"
            sx={{ paddingTop: { xs: "20px" } }}
          >
            <IconButton>
              {" "}
              <InstagramIcon sx={{ color: primary.mainText }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: primary.mainText }} />
            </IconButton>
            <IconButton>
              {" "}
              <FacebookIcon sx={{ color: primary.mainText }} />
            </IconButton>
            <IconButton>
              {" "}
              <LinkedInIcon sx={{ color: primary.mainText }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ color: "#D9D9D9", width: "90%" }} />
      <Grid
        container
        spacing={4}
        sx={{ p: { xs: "28px 20px 0px 20px", md: "126px 70px 64px 70px" } }}
      >
        <Grid sx={{ display: "block" }} item xs={3} lg={3}>
          <Typography className="heading">{"Pages"}</Typography>
          <List>
            <ListItem sx={{ padding: "8px 0px" }}>
              <Link href="#">
                <ListItemText
                  primary={
                    <Typography className="sub-data">{"Home"}</Typography>
                  }
                />
              </Link>
            </ListItem>
            <ListItem sx={{ padding: "8px 0px" }}>
              <Link href="#">
                <ListItemText
                  primary={
                    <Typography className="sub-data">
                      {"Marketplace"}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>

            <ListItem sx={{ padding: "8px 0px" }}>
              <ListItemText
                primary={
                  <Typography className="sub-data">{"Vehicals"}</Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ padding: "8px 0px" }}>
              <ListItemText
                primary={
                  <Typography className="sub-data">{"About"}</Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ padding: "8px 0px" }}>
              <ListItemText
                primary={
                  <Typography className="sub-data">{"Offers"}</Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid sx={{ display: "block" }} item xs={3} lg={3}>
          <Typography className="heading">{"Important"}</Typography>
          <ListItem sx={{ padding: "8px 0px" }}>
            <Link href="#">
              <ListItemText
                primary={
                  <Typography className="sub-data">
                    {"Privacy Policy"}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
          <ListItem sx={{ padding: "8px 0px" }}>
            <Link href="#">
              <ListItemText
                primary={
                  <Typography className="sub-data">
                    {"Grievance Redressal"}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
        </Grid>

        <Grid sx={{ display: "block" }} item xs={3} lg={3}>
          <Typography className="heading">{"Press"}</Typography>
        </Grid>
        {/* <Grid sx={{ display: "block" }} item xs={3} lg={3}>
          <Typography className="heading">{"Blog"}</Typography>
        </Grid> */}

        <Grid sx={{ display: "block" }} item xs={3} lg={3}>
          <Typography className="heading">{"Get in touch with us"}</Typography>
          <Typography className="heading">{"Address"}</Typography>
          <ListItem sx={{ padding: "8px 0px" }}>
            <ListItemText
              primary={
                <Typography className="sub-data">
                  {
                    "Blubble Pvt Ltd, Attic Space- Chanakya, 4th Floor, No. 32, 2nd cross, Nanjappa Reddy Layout, Koramangala 8th Block, Bengaluru, Karnataka 560095"
                  }
                </Typography>
              }
            />
          </ListItem>
          <Typography className="heading">{"Email"}</Typography>
          <ListItem sx={{ padding: "8px 0px" }}>
            <ListItemText
              primary={
                <Typography className="sub-data">{"turn@sales.in"}</Typography>
              }
            />
          </ListItem>
          <Typography className="heading">{"Phone Number"}</Typography>
          <ListItem sx={{ padding: "8px 0px" }}>
            <ListItemText
              primary={
                <Typography className="sub-data">{"+91 XXXXXXXXXX"}</Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: "8px 0px" }}>
            <ListItemText
              primary={
                <Typography className="sub-data">{`© Copyright 2021. All rights reserved.`}</Typography>
              }
            />
          </ListItem>
        </Grid>
      </Grid>
    </CustomFooter>
  );
};

export const MemoizedFooter = React.memo(Footer);

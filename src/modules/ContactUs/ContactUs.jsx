import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { primary } from "@/src/SDK/theme";
import { Facebook, YouTube } from "@mui/icons-material";
import useContactUs from "./hooks/useContactUs";
import { MemoizedNameField, MemoizedPhoneField } from "@/src/SDK/input";
import { MemoizedButton } from "@/src/SDK";
import { checkError } from "@/src/SDK/utils";
import { StateOptions } from "@/src/constant/formInfo";
import { MemoizedSelectDropDown } from "@/src/SDK/selectDropdown/selectDropdown";

const CustomContactUs = styled(Box)(({ theme }) => ({
  background: primary?.white,

  ".stats-image": {
    // width:"100%",
    maxHeight: "260px",
  },

  ".header-info": {
    fontSize: "34px",
    fontWeight: "700",
    lineHeight: "52px",
    letterSpacing: "0em",
    textAlign: "left",
    color: primary?.main,
  },

  ".form-header": {
    color: primary?.greyText,
    fontSize: "30px",
    fontWeight: "500",
    lineHeight: "46pxpx",
    letterSpacing: "0em",
    textAlign: "left",
    marginTop: "28px",
    marginBottom: "20px",
  },

  ".input-field": {
    border: "0px solid transparent",
    width: "100%",
    height: "60px",
  },

  ".input-field-phone": {
    border: "0px solid transparent",
    width: "100%",
    padding: "0px",

    ".MuiFilledInput-root": {
      paddingRight: "0px",
      height: "60px",
    },
  },

  ".submit-cta": {
    border: "transparent",
    margin: "none",
    padding: "14px 20px",
  },

  ".thank-you": {
    fontSize: "26px",
    fontWeight: "700",
    lineHeight: "39px",
    letterSpacing: "0em",
    color: primary?.fantaOrange,
  },

  ".completed-desc": {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0em",
    color: primary?.main,
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  ".contact-info": {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "30px",
    letterSpacing: "0em",
    color: primary?.main,
  },

  [theme.breakpoints.down("md")]: {
    ".header-info": {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "52px",
      letterSpacing: "0em",
      textAlign: "left",
      color: primary?.main,
    },

    ".form-header": {
      color: primary?.greyText,
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "46pxpx",
      letterSpacing: "0em",
      textAlign: "left",
      marginTop: "10px",
      marginBottom: "16px",
    },

    ".stats-image": {
      // width:"100%",
      maxHeight: "160px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    ".header-info": {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "52px",
      letterSpacing: "0em",
      textAlign: "left",
      color: primary?.main,
    },

    ".form-header": {
      color: primary?.greyText,
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "46pxpx",
      letterSpacing: "0em",
      textAlign: "left",
      marginTop: "10px",
      marginBottom: "16px",
    },

    ".stats-image": {
      // width:"100%",
      maxHeight: "100px",
    },
  },
}));

const ContactUs = () => {
  const { form, loading, formSubmit } = useContactUs();

  return (
    <CustomContactUs>
      {formSubmit ? (
        <Box
          style={{
            width: "100%",
            alignItems: "center",
            textAlign: "center",
            padding: "4%",
          }}
        >
          <img src={"/images/whyecopay3.webp"} className="stats-image" />

          <Typography className="thank-you">Thank you!</Typography>
          <Typography className="completed-desc">
            for taking a step towards both preserving our environment and
            securing a sustainable future through your investment!
          </Typography>
          <Typography className="contact-info">
            Our support team will contact you asap!
          </Typography>
        </Box>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ p: { xs: "16px 16px 64px 24px", md: "1px 0px 0px 0px" } }}
        >
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              background: primary?.main,
              display: { sm: "none", xs: "none", md: "block", lg: "block" },
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
              width={"100%"}
            >
              {" "}
              <img src={"/images/whyecopay3.webp"} className="stats-image" />
            </Box>
          </Grid>

          <Grid item sm={12} md={6} style={{ width: "100%" }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              //minHeight="100vh"
              width={"100%"}
              sx={{ p: { md: "20px", sm: "10px" } }}
            >
              <Box>
                <img src={"/images/whyecopay2.webp"} className="stats-image" />
                <Typography className="header-info">
                  Let’s plan your investment together!
                </Typography>
                <Typography className="form-header">Connect with us</Typography>

                <Box>
                  <form onSubmit={form.handleSubmit}>
                    <Grid container spacing={4}>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ width: "100%" }}
                      >
                        <MemoizedNameField
                          className="input-field"
                          name="name"
                          error={!!checkError("name", form)}
                          helperText={form.errors.name}
                          placeholder="Your Name"
                          value={form.values.name}
                          onChange={(e) => {
                            form.handleChange(e);
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ width: "100%" }}
                      >
                        {" "}
                        <MemoizedSelectDropDown
                          style={{ height: "60px" }}
                          form={form}
                          id={"state"}
                          name="state"
                          required={true}
                          title={"Select State"}
                          value={form.values.state}
                          optionsData={StateOptions}
                          onChange={form.handleChange}
                          error={!!checkError("state", form)}
                          helperText={form.errors.state}
                        />
                      </Grid>

                      <Grid item lg={12} style={{ width: "100%" }}>
                        <MemoizedPhoneField
                          sx={{ minWidth: "100% !important" }}
                          error={!!checkError("mobile", form)}
                          helperText={form.errors.mobile}
                          className="input-field-phone"
                          name="mobile"
                          placeholder="Your Mobile"
                          value={form.values.mobile}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +91
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <MemoizedButton
                                  type="submit"
                                  content={"Connect"}
                                  className="submit-cta"
                                  loading={loading}
                                  handleClick={(e) => {
                                    console.log("click", form);
                                    // let payload = {
                                    //   phoneNumber: form.values.mobile,
                                    //   connectType: "floating_call_icon",
                                    // };

                                    form.handleSubmit(e);
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => {
                            form.handleChange(e);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </CustomContactUs>
  );
};

export const MemoizedContactUs = React.memo(ContactUs);

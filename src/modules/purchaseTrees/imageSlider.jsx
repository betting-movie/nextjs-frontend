const CustomImageSlider = styled(Box)(({ theme }) => ({
  ".swiper": {
    width: "100%",
    height: "100%",
  },
  ".swiperSlide": {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".swiperSlideImg": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  ".mySwiper2": {
    height: "80%",
    width: "100%",
  },
  ".mySwiper": {
    height: "20%",
    boxSizing: "border-box",
    padding: "10px 0",
  },
  ".swiperSlide": {
    width: "25%",
    height: "100%",
    opacity: 0.4,
  },
  ".swiperSlideThumbActive": {
    opacity: 1,
  },
  ".swiperSlideImg": {
    display: "block",
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
  },

  ".swiperSlideImgThumb": {
    display: "block",
    width: "100%",
    maxHeight: "100px",
    objectFit: "cover",
  },

  [theme.breakpoints.down("sm")]: {},
}));

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, styled } from "@mui/material";

export default function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log("thumbsSwiper", thumbsSwiper);

  return (
    <CustomImageSlider>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            className="swiperSlideImg"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="swiperSlideImgThumb"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="swiperSlideImgThumb"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="swiperSlideImgThumb"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="swiperSlideImgThumb"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="swiperSlideImgThumb"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="swiperSlideImgThumb"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="swiperSlideImgThumb"
          />
        </SwiperSlide>
      </Swiper>
    </CustomImageSlider>
  );
}

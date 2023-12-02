import { Box, styled } from "@mui/material";

import React from "react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMobile } from "@/src/utils/findViewPorts";
import { useDevice } from "@/src/utils/findDeviceView";
import { MemoizedPlantCard } from "./plantCards";
import { MemoizedPlantColCard } from "./collectionCards";

const CustomPlantDataSwiper = styled(Box)(({ theme, ignorePadding }) => ({
  ".image-section": {
    objectFit: "contain",
    width: "100% !important",
    position: "relative !important",
  },
  ".image-section-2": {
    objectFit: "contain",
    // width: "100% !important",
    position: "relative !important",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    //padding: ignorePadding ? "0px" : "0px 0px 20px 20px",
    margin: "0px",
  },
}));

const PlantDataSwiper = ({
  data,

  ignorePadding,
  slideReq,
}) => {
  const isMobile = useMobile();
  const device = useDevice();

  return (
    <CustomPlantDataSwiper>
      <Box>
        <Swiper
          updateOnWindowResize={true}
          slidesPerView={device === 2 ? 1.4 : device === 3 ? 2.8 : 4.1}
          spaceBetween={isMobile ? 10 : 20}
          pagination={false}
          loop={true}
          modules={[Pagination]}
          effect={"fade"}
        >
          {data?.map((res, index) => {
            return (
              <SwiperSlide key={index}>
                <MemoizedPlantCard info={res} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </CustomPlantDataSwiper>
  );
};

export const MemoizedPlantDataSwiper = React.memo(PlantDataSwiper);

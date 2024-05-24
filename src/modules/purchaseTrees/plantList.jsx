import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import { MemoizedPlantDataSwiper } from "./plantSwiper";

const PlantList = ({ data }) => {
  return (
    <Box>
      <Typography
        sx={{
          padding: {
            lg: "1em 0em 1em 0em",
            md: "1em 0em 1em 0em",
            sm: "0.8em 0em 0.8em 0em",
            xs: "0.8em 0em 0.8em 0em",
          },
          fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
          fontWeight: 600,
        }}
      >
        Plants
      </Typography>

      <Box style={{ display: data?.length > 0 ? "none" : "block" }}>
        <Skeleton variant="rectangular" sx={{ marginBottom: "10px" }}>
          <Avatar />
        </Skeleton>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={20}
          animation="wave"
          sx={{ marginBottom: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={40}
          animation="wave"
          sx={{ marginBottom: "10px" }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={80}
          animation="wave"
          sx={{ marginBottom: "10px" }}
        />
      </Box>

      <MemoizedPlantDataSwiper data={data} />
    </Box>
  );
};

export default PlantList;

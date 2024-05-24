import React from "react";
import { Box, Typography, List, ListItem, Grid, Button } from "@mui/material";

const DescribedInfo = () => (
  <Box sx={{ padding: "30px" }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            Scope:
          </Typography>
          <List>
            <ListItem>Enhancement of Biodiversity</ListItem>
            <ListItem>Increase in Green Cover</ListItem>
            <ListItem>Reduction of Man-Animal Conflict</ListItem>
            <ListItem>Generation of Rural Employment</ListItem>
            <ListItem>Improvement of Wildlife Habitats</ListItem>
          </List>
          <Typography variant="h4" sx={{ marginTop: "20px", marginBottom: "20px" }}>
            Tree Species:
          </Typography>
          <Typography>
            The species of trees that are planted depend on the project, and they
            are chosen based on their native habitat in the corresponding
            ecological zone.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            Why Trees?
          </Typography>
          <List>
            <ListItem>Improve air quality</ListItem>
            <ListItem>Provide habitat for wildlife</ListItem>
            <ListItem>Reduce erosion</ListItem>
            <ListItem>Combat climate change</ListItem>
            <ListItem>Mental health benefits</ListItem>
            <ListItem>Beautify landscapes</ListItem>
            <ListItem>Sense of accomplishment</ListItem>
            <ListItem>Offset carbon emissions</ListItem>
            <ListItem>Promote sustainability</ListItem>
            <ListItem>Protect the environment</ListItem>
            <ListItem>Community involvement</ListItem>
            <ListItem>Education and learning</ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>

    <Box sx={{ marginTop: "40px" }}>
      <Typography variant="h4">Social Impact:</Typography>
      <Typography>
        Planting trees on your birthday can have numerous social and community
        benefits.
      </Typography>
      <List>
        <ListItem>Community involvement</ListItem>
        <ListItem>Sense of belonging</ListItem>
        <ListItem>Build stronger communities</ListItem>
        <ListItem>Social connections</ListItem>
        <ListItem>Education and learning</ListItem>
        <ListItem>Raise awareness about trees</ListItem>
        <ListItem>Inspire positive change</ListItem>
        <ListItem>Promote sustainability</ListItem>
      </List>
    </Box>

    <Box sx={{ marginTop: "40px" }}>
      <Typography variant="h4">Birthday Tree Gift Ideas:</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ padding: "15px", backgroundColor: "#fafafa" }}>
            <Typography variant="h5">Birthday Tree Gift</Typography>
            <Typography>
              A long-lasting tribute that reduces carbon footprint.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ padding: "15px", backgroundColor: "#fafafa" }}>
            <Typography variant="h5">Tree Planting Party</Typography>
            <Typography>
              Unique and eco-friendly celebration with hands-on involvement.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ padding: "15px", backgroundColor: "#fafafa" }}>
            <Typography variant="h5">Birthday Tree Dedication</Typography>
            <Typography>Meaningful tribute to someone's life and legacy.</Typography>
          </Box>
        </Grid>
        {/* Add more grid items for remaining birthday tree gift ideas */}
      </Grid>
    </Box>

    <Button variant="contained" sx={{ marginTop: "40px" }}>
      Explore Birthday Tree Options
    </Button>
  </Box>
);

export default DescribedInfo;

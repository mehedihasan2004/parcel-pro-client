import { Box, Grid, Typography } from "@mui/material";
import React from 'react';
import { CrewCard } from "../../components";

const JoinTheCrew = () => {
    const crewsData = [
        {
          id: 1,
          name: "Swift Biker",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
          img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/bikefix.png",
        },
        {
          id: 2,
          name: "Motocycle Rider",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
          img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/vespfix.png",
        },
        {
          id: 3,
          name: "Pickup Driver",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
          img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/carfix.png",
        },
      ];
      return (
        <Box>
         <Box style={{marginBottom:'130px'}}>
         <Typography variant="h3" sx={{ textAlign: "center" }}>
            Join The Crew
          </Typography>
         </Box>
    
          <Grid
            container
            spacing={4}
            sx={{
              mt: "60px",
            }}
          >
            {crewsData.map((crewCard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CrewCard crewCard={crewCard} key={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
};

export default JoinTheCrew;
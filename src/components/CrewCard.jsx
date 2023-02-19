import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const CrewCard = ({ crewCard }) => {
  
  return (
    <Box>
      <Card sx={{ maxWidth: 345,borderRadius:"10px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="65"
          image={crewCard.img}
          sx={{
            width: "auto",
            p: "25px",
            marginLeft: "15px",
            bgcolor: "#E1ECB8",
            
            position: "absolute",
            top: "145px",
            // display: "flex",
            // textAlign: "center",
            borderRadius: "10px",
          }}
        />
        <CardContent sx={{ bgcolor: "#253138", color: "#FFFFFF", p:"30px" }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ mt: "30px" }}
          >
            {crewCard.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ bgcolor: "#253138", color: "#F0EFE6",py:'10px' }}
          >
            {crewCard.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ bgcolor: "#253138", pb: "20px" }}>
          <Button
            sx={{ bgcolor: "orange", color: "#F0EFE6"}}
            size="large"
          >
            Join Us
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CrewCard;

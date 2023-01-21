import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MyCard() {
  const [isShown, setIsShown] = useState(false);

  return (
    <Card sx={{ textAlign: "center" }}>
      <CardActionArea
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <CardContent sx={{ height: "10rem", width: "15rem", margin: "1rem" }}>
          <Typography gutterBottom variant="h5" component="div">
            Blog
          </Typography>
          {isShown ? (
            <Typography variant="h6" color="text.secondary">
              Creation Time
            </Typography>
          ) : (
            ""
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

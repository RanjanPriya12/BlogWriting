import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function MyCard({ blog }) {

  return (
    <Card sx={{ textAlign: "center" }}>
      <CardActionArea
      >
        <CardContent
          sx={{ height: "13rem", width: "15rem", margin: "1rem" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {blog?.title}
          </Typography>
          <Box
              component="img"
              sx={{
                height: 230,
                width: 350,
                maxHeight: { xs: 233, md: 767 },
                maxWidth: { xs: 350, md: 750 },
              }}
              alt="Blog Image"
              src={blog?.avatar?.url}
            />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

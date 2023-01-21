import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyCard from "../card/Card";
import { IconButton } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link } from "react-router-dom";

export default function Home() {
  const arr = [
    1, 2, 4, 21, 223, 31, 31, 34, 21342, 343, 4, 54, 413, 45, 345, 5, 64, 654,
    6, 546, 54, 65, 46, 54, 645, 6, 4, 64, 6, 546, 54, 6, 46, 45, 654, 6, 54,
    654, 6, 546,
  ];
  const [value, setValue] = useState(arr);
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {value.map((blog, index) => (
              <Grid item xs={2} sm={4} md={3} key={index}>
                <Link className="link1" to={`/${blog.id}`}>
                  <MyCard />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid
          display="flex"
          flexDirection="row-reverse"
          position="sticky"
          bottom="1rem"
        >
          <IconButton>
            <PostAddIcon sx={{ fontSize: "3.5rem" }} />
          </IconButton>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

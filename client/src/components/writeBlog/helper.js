import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useNavigate } from "react-router-dom";
import { PublishBLog } from "./WriteBlog";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Helper() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Box sx={{ width: "100%" }}>
                <Stack spacing={2}>
                  <IconButton>
                    <HomeIcon
                      sx={{ fontSize: "3rem" }}
                      onClick={() => navigate("/")}
                    />
                  </IconButton>
                  <IconButton>
                    <PostAddIcon
                      sx={{ fontSize: "3rem" }}
                      onClick={() => navigate("/newBlog")}
                    />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <PublishBLog />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const SingleBlog = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            logo
          </Grid>
          <Grid item xs={6} md={9}>
            blog writing
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleBLog } from "../../redux/action";

export const SingleBlog = () => {
  const blog = useSelector((store) => store.blog);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(blog);

  useEffect(() => {
    dispatch(getSingleBLog(id));
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2} marginTop="3rem">
          <Grid item xs={6} md={2}>
            <IconButton>
              <HomeIcon
                sx={{ fontSize: "3rem" }}
                onClick={() => navigate("/")}
              />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={8}>
            <Box>
              <Typography variant="h4" component="h5" textAlign="left">
                {blog.title}
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{
                height: 230,
                width: 750,
                maxHeight: { xs: 233, md: 767 },
                maxWidth: { xs: 350, md: 750 },
              }}
              alt="Blog Image"
              src={blog?.avatar?.url}
            />
            <Box>
              <Typography textAlign="justify">{blog.content}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

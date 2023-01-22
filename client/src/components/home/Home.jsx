import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MyCard from "../card/Card";
import { IconButton } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBLogs } from "../../redux/action";


export default function Home() {
  const blogs =useSelector(store=>store.blogs);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
      dispatch(getAllBLogs());
  },[dispatch]);
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {blogs?.map((blog, index) => (
              <Grid item xs={2} sm={4} md={3} key={index}>
                <Link className="link1" to={`/${blog._id}`}>
                  <MyCard blog={blog}/>
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
            <PostAddIcon sx={{ fontSize: "3.5rem" }} onClick={()=>navigate('/newBLog')}/>
          </IconButton>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

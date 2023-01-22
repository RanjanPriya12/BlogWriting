import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Avatar, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createBlog } from "../../redux/action";
const theme = createTheme();

export const PublishBLog = () => {
  const dispatch = useDispatch();
  const initialState={
    title: "",
    content: ""
  }
  const [myBlog, setMyBlog] = useState(initialState);
  const { title,content } = myBlog;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const myForm = new FormData();
    myForm.set("title", title);
    myForm.set("content", content);
    myForm.set("avatar", avatar);
    dispatch(createBlog(myForm));
  };

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setMyBlog({ ...myBlog, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    console.log("Blog Created Successfully");
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: "4.5rem",
            mb: "5rem",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, mb: 3 }}
            maxWidth="700px"
          >
            <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                id="registerImage"
                display="flex"
                justifyContent="space-between"
              >
                <div>
                  <IconButton
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      name="avatar"
                      onChange={handleChange}
                    />
                    <CloudUploadIcon />
                    <Typography>
                    {avatarPreview ? "Uploaded" : "Upload Image for Your Blog"}
                    </Typography>
                    
                  </IconButton>
                  {avatarPreview && <Avatar alt="avatar" src={avatarPreview} />}
                </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Title of Your Blog..."
                  required
                  name="title"
                  label="Blog Title"
                  value={title}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Content of Your Blog..."
                  required
                  multiline
                  rows={8}
                  name="content"
                  label="Blog Content"
                  value={content}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
                Publish
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

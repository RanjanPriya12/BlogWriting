import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="sx">
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex',p:'1rem' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              fontSize:'2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blog-App
          </Typography>
      </Container>
    </AppBar>
  );
}
export default Navbar;

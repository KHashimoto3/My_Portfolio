"use client";

import { Box, Container, Grid } from "@mui/material";

export default function HomeAboutMe() {
  return (
    <Container maxWidth="md">
      <h2 style={{ textAlign: "center" }}>~About me~</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="/about_me_icon.jpg"
              alt="about_me_icon"
              style={{ maxWidth: "300px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <p>自己紹介がきます。</p>
        </Grid>
      </Grid>
    </Container>
  );
}

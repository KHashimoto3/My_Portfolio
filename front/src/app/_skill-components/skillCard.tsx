"use client";

import { Box, Rating, Stack } from "@mui/material";

export default function SkillCard() {
  return (
    <div className="skill-card">
      <Box
        sx={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} textAlign={"center"}>
          <img src={"/sample_pc.png"} alt={"PC"} style={{ width: "100px" }} />
          <h3>技術名</h3>
          <Rating name="read-only" value={3} readOnly />
          <p>用途の説明</p>
        </Stack>
      </Box>
    </div>
  );
}

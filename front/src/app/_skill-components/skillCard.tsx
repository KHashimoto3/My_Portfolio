"use client";

import { Box, Rating, Stack } from "@mui/material";

type Props = {
  name: string;
  howToUse: string;
  image: string;
  rate: number;
};

export default function SkillCard(props: Props) {
  const { name, howToUse, image, rate } = props;

  return (
    <div className="skill-card">
      <Box
        sx={{
          width: "100%",
          height: "300px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} textAlign={"center"}>
          <img src={image} alt={"PC"} style={{ width: "100px" }} />
          <h3>{name}</h3>
          <Rating name="read-only" value={rate} readOnly />
          <p>{howToUse}</p>
        </Stack>
      </Box>
    </div>
  );
}

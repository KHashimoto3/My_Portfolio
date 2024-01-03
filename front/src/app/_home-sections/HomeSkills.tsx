"use client";

import { Box, Container, Grid } from "@mui/material";
import SkillCard from "../_skill-components/skillCard";
import { SkillList } from "../types/skillList";

export default function HomeSkills() {
  const sampleSkillList: SkillList[] = [
    {
      id: 1,
      name: "スキル1",
      howToUse: "スキル1の使い方",
      image: "/sample_pc.png",
      rate: 3,
    },
    {
      id: 2,
      name: "スキル2",
      howToUse: "スキル2の使い方",
      image: "/sample_pc.png",
      rate: 4,
    },
    {
      id: 3,
      name: "スキル3",
      howToUse: "スキル3の使い方",
      image: "/sample_pc.png",
      rate: 5,
    },
    {
      id: 4,
      name: "スキル4",
      howToUse: "スキル4の使い方",
      image: "/sample_pc.png",
      rate: 2,
    },
  ];

  return (
    <Container maxWidth="md">
      <h2 style={{ textAlign: "center" }}>~Skills~</h2>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Grid container spacing={2}>
          {sampleSkillList.map((skill) => (
            <Grid item xs={4} key={skill.id}>
              <SkillCard
                name={skill.name}
                howToUse={skill.howToUse}
                image={skill.image}
                rate={skill.rate}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

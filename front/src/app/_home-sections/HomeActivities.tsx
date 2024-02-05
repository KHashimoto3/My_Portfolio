"use client";

import { Box, Container, Grid } from "@mui/material";
import { ActivityList } from "../types/activityList";
import ActivityCard from "../_activity-components/activityCard";
import SectionTitle from "@/components/header/sectionTitle";

export default function HomeActivities() {
  const activities: ActivityList[] = [
    {
      id: 1,
      title: "研究",
      imgPath: "sample_pc.png",
    },
    {
      id: 2,
      title: "WEBアプリ",
      imgPath: "sample_pc.png",
    },
    {
      id: 3,
      title: "動画編集",
      imgPath: "sample_pc.png",
    },
    {
      id: 4,
      title: "動画編集",
      imgPath: "sample_pc.png",
    },
  ];

  return (
    <Container maxWidth="md">
      <SectionTitle title="~Activities~" />
      <Box sx={{ width: "100%", height: "auto" }}>
        <Grid container spacing={2}>
          {activities.map((activity) => (
            <Grid item xs={4} key={activity.id}>
              <ActivityCard activity={activity} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

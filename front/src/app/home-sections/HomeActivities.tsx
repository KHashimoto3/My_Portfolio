"use client";

import { Box, Container, Grid } from "@mui/material";
import { ActivityList } from "../types/activityList";
import ActivityCard from "../activity-components/activityCard";

export default function HomeActivities() {
  const activities: ActivityList[] = [
    {
      id: 1,
      title: "研究",
      imgPath: "activity-research.jpg",
    },
    {
      id: 2,
      title: "WEBアプリ開発",
      imgPath: "activity-webapp-dev.jpg",
    },
    {
      id: 3,
      title: "動画編集",
      imgPath: "activity-video-edit.jpg",
    },
  ];

  return (
    <Container maxWidth="md">
      <h2 style={{ textAlign: "center" }}>~Activities~</h2>
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

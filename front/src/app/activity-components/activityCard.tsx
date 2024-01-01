"use client";

import { Box, Stack } from "@mui/material";
import { ActivityList } from "../types/activityList";

type Props = {
  activity: ActivityList;
};

export default function ActivityCard(props: Props) {
  const { activity } = props;
  return (
    <div className="activity-card">
      <Box sx={{ width: "90%", height: "200px" }}>
        <Stack spacing={2}>
          <img
            src={activity.imgPath}
            alt={activity.title}
            style={{ width: "100%" }}
          />
          <h3>{activity.title}</h3>
        </Stack>
      </Box>
    </div>
  );
}

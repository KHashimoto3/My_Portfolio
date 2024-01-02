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
          <img
            src={activity.imgPath}
            alt={activity.title}
            style={{ width: "100px" }}
          />
          <h3>{activity.title}</h3>
        </Stack>
      </Box>
    </div>
  );
}

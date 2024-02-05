"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SkillCard from "./skillCard";
import { SkillList } from "@/types/skillList";
import { SkillKinds } from "@/types/skillKinds";

type Props = {
  kinds: SkillKinds;
};

export default function SkillModalInner(props: Props) {
  const { kinds } = props;

  useEffect(() => {
    switch (props.kinds) {
      case "web":
        setKindsText("WEB開発");
        break;
      case "movie":
        setKindsText("動画制作");
        break;
      case "other":
        setKindsText("その他");
        break;
    }

    //TODO: kindsの種類に応じて、DBからデータを取得するように記述する
  }, [kinds]);

  const modalInnerStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    overflowY: "scroll",
  };

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

  const [kindsText, setKindsText] = useState<string>("WEB開発");

  return (
    <Box sx={modalInnerStyle}>
      <Typography variant="h4" component="h4">
        {kindsText}
      </Typography>
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
  );
}

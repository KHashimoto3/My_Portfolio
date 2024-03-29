"use client";

import { Container, Modal, Stack, Typography } from "@mui/material";
import SkillModalInner from "../skill/skillModalInner";
import { useState } from "react";
import { SkillKinds } from "@/types/skillKinds";
import OpenSkillModalButton from "@/components/button/openSkillModalButton";
import SectionTitle from "@/components/header/sectionTitle";

export default function HomeSkills() {
  const [skillModalOpen, setSkillModalOpen] = useState<boolean>(false);

  const [skillKinds, setSkillKinds] = useState<SkillKinds>("web");

  const openSkillModal = (kinds: SkillKinds) => {
    setSkillKinds(kinds);
    setSkillModalOpen(true);
  };

  const closeSkillModal = () => {
    setSkillModalOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <SectionTitle title="~Skills~" />
      <Typography variant="body1" component={"p"}>
        ご覧になりたいスキルのカテゴリを選択してください。詳細がモーダルで開きます。
      </Typography>
      <Stack spacing={2} textAlign={"center"} sx={{ marginTop: "20px" }}>
        <OpenSkillModalButton
          label="WEB開発"
          onClick={() => openSkillModal("web")}
        />
        <OpenSkillModalButton
          label="動画制作"
          onClick={() => openSkillModal("movie")}
        />
      </Stack>
      <Modal open={skillModalOpen} onClose={closeSkillModal}>
        <SkillModalInner kinds={skillKinds} />
      </Modal>
    </Container>
  );
}

"use client";

import { Button, Container, Modal } from "@mui/material";
import SkillModalInner from "../_skill-components/skillModalInner";
import { useState } from "react";
import { SkillKinds } from "../types/skillKinds";

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
    <Container maxWidth="md">
      <h2 style={{ textAlign: "center" }}>~Skills~</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => openSkillModal("web")}
      >
        WEB開発
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => openSkillModal("movie")}
      >
        動画制作
      </Button>
      <Modal open={skillModalOpen} onClose={closeSkillModal}>
        <SkillModalInner kinds={skillKinds} />
      </Modal>
    </Container>
  );
}

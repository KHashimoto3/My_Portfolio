import { Container } from "@mui/material";
import SkillCard from "../_skill-components/skillCard";

export default function HomeSkills() {
  return (
    <Container maxWidth="md">
      <h2 style={{ textAlign: "center" }}>~Skills~</h2>
      <SkillCard />
    </Container>
  );
}

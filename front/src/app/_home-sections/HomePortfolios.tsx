import { Container } from "@mui/material";
import PortfolioCard from "../_portfolio-components/portfolioCard";

export default function HomePortfolios() {
  return (
    <Container maxWidth="md">
      <h2 style={{ textAlign: "center" }}>~Portfolios~</h2>
      <PortfolioCard
        title="制作物1"
        description="制作物の説明1"
        imgPath="/sample_pc.png"
      />
    </Container>
  );
}

import { Container } from "@mui/material";
import PortfolioCard from "../_portfolio-components/portfolioCard";

export default function HomePortfolios() {
  return (
    <Container maxWidth="md">
      <h2 style={{ textAlign: "center" }}>~Portfolios~</h2>
      <PortfolioCard />
    </Container>
  );
}

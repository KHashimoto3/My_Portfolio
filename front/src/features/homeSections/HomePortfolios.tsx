"use client";

import { Container, Grid } from "@mui/material";
import PortfolioCard from "../portfolio/portfolioCard";
import { PortfolioList } from "@/types/portfolioList";
import SectionTitle from "@/components/header/sectionTitle";

export default function HomePortfolios() {
  const samplePortfilioList: PortfolioList[] = [
    {
      id: 1,
      title: "制作物1",
      description: "制作物の説明1",
      imgPath: "/sample_portfolio.jpg",
      tag: ["タグ1", "タグ2"],
    },
    {
      id: 2,
      title: "制作物2",
      description: "制作物の説明2",
      imgPath: "/sample_portfolio.jpg",
      tag: ["タグ1"],
    },
    {
      id: 3,
      title: "制作物3",
      description: "制作物の説明3",
      imgPath: "/sample_portfolio.jpg",
      tag: ["タグ1", "タグ2", "タグ3"],
    },
    {
      id: 4,
      title: "制作物4",
      description: "制作物の説明4",
      imgPath: "/sample_portfolio.jpg",
      tag: ["タグ1", "タグ2"],
    },
  ];

  return (
    <Container maxWidth="md">
      <SectionTitle title="~Portfolios~" />
      <Grid container spacing={2}>
        {samplePortfilioList.map((portfolio) => (
          <Grid item xs={4} key={portfolio.id}>
            <PortfolioCard
              title={portfolio.title}
              description={portfolio.description}
              imgPath={portfolio.imgPath}
              tag={portfolio.tag}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

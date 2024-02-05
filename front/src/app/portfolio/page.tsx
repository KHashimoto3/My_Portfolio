"use client";

import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import StyledHeading2 from "@/components/header/styledHeading2";
import { Portfolio } from "../types/portfolio";

export default function Portfolio() {
  const samplePortfolio: Portfolio = {
    id: 1,
    title: "サンプル制作物",
    tag: ["サンプルのタグ1", "サンプルのタグ2", "サンプルのタグ3"],
    imgPath: "./sample_portfolio.jpg",
    abstract: "このプロダクトは、サンプルのポートフォリオです。",
    background: "サンプルの背景・目的",
    functions: ["サンプルの機能1", "サンプルの機能2", "サンプルの機能3"],
    stacks: ["./sample_pc.png", "./sample_pc.png", "./sample_pc.png"],
    thoughts: ["サンプルの工夫ポイント", "サンプルの工夫ポイント2"],
    period: "2023年1月~2023年12月",
    position: ["サンプルの役割1", "サンプルの役割2"],
    link: "https://example.com",
    githubLink: "https://sample.com",
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component={"h1"}
          sx={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "10px",
            fontWeight: "lighter",
          }}
        >
          {samplePortfolio.title}
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="/sample_portfolio.jpg"
                alt="サンプルのポートフォリオ"
                style={{ maxWidth: "90%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            {samplePortfolio.tag.map((tag) => (
              <Chip label={tag} key={tag} sx={{ margin: "2px" }} />
            ))}
            <StyledHeading2 title="概要" />
            <Typography variant="body1" component={"p"}>
              {samplePortfolio.abstract}
            </Typography>
            <StyledHeading2 title="背景・目的" />
            <Typography variant="body1" component={"p"}>
              {samplePortfolio.background}
            </Typography>
            <StyledHeading2 title="機能" />
            <ul>
              {samplePortfolio.functions.map((func) => (
                <li key={func}>{func}</li>
              ))}
            </ul>
            <StyledHeading2 title="工夫ポイント" />
            <ul>
              {samplePortfolio.thoughts.map((thought) => (
                <li key={thought}>{thought}</li>
              ))}
            </ul>
            <StyledHeading2 title="使用技術" />
            <Typography variant="body1" component={"p"}>
              <Grid container spacing={1}>
                {samplePortfolio.stacks.map((stack) => (
                  <Grid item xs={3} key={stack}>
                    <img
                      src={stack}
                      alt="stack"
                      style={{ maxWidth: "100px" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Typography>
            <StyledHeading2 title="開発期間" />
            <Typography variant="body1" component={"p"}>
              {samplePortfolio.period}
            </Typography>
            <StyledHeading2 title="役割" />
            <ul>
              {samplePortfolio.position.map((position) => (
                <li key={position}>{position}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", height: "auto", marginTop: "50px" }}>
          <StyledHeading2 title="デモ・プロダクトURL" />
          <Typography variant="body1" component={"p"}>
            <a
              href={samplePortfolio.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {samplePortfolio.link}
            </a>
          </Typography>
          <Typography variant="body1" component={"p"}>
            <a
              href={samplePortfolio.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {samplePortfolio.githubLink}
            </a>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import StyledHeading2 from "../_ui/header/styledHeading2";
import { Style } from "@mui/icons-material";

export default function Portfolio() {
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
          プロダクト名
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
            <StyledHeading2 title="概要" />
            <Typography variant="body1" component={"p"}>
              このプロダクトは、サンプルのポートフォリオです。
            </Typography>
            <StyledHeading2 title="機能" />
            <Typography variant="body1" component={"p"}>
              ・サンプルの機能1
              <br />
              ・サンプルの機能2
              <br />
              ・サンプルの機能3
              <br />
            </Typography>
            <StyledHeading2 title="使用技術" />
            <Typography variant="body1" component={"p"}>
              ・サンプルの技術1
              <br />
              ・サンプルの技術2
              <br />
              ・サンプルの技術3
              <br />
            </Typography>
            <StyledHeading2 title="開発期間" />
            <Typography variant="body1" component={"p"}>
              2023年1月~2023年12月
            </Typography>
            <StyledHeading2 title="役割" />
            <Typography variant="body1" component={"p"}>
              ・サンプルの業務1
              <br />
              ・サンプルの業務2
              <br />
              ・サンプルの業務3
              <br />
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", height: "auto", marginTop: "50px" }}>
          <StyledHeading2 title="デモ・プロダクトURL" />
        </Box>
      </Container>
    </div>
  );
}

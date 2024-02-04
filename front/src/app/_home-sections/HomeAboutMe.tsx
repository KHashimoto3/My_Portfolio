"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import SectionTitle from "../_ui/header/sectionTitle";

export default function HomeAboutMe() {
  return (
    <Container maxWidth="md">
      <SectionTitle title="~About Me~" />
      <Grid container spacing={2}>
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
              src="/about_me_icon.jpg"
              alt="about_me_icon"
              style={{ maxWidth: "300px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component={"h2"}>
            ＜経歴＞
          </Typography>
          <Typography variant="body1" component={"p"}>
            2000年: 長野県生まれ 生まれてすぐ茨城県へ
          </Typography>
          <Typography variant="body1" component={"p"}>
            2019年: 県立工業高校 情報技術科 卒業
          </Typography>
          <Typography variant="body1" component={"p"}>
            2023年: 私立大学 情報学部情報工学科 卒業
          </Typography>
          <Typography variant="body1" component={"p"}>
            2023年~: 同大学大学院 工学研究科情報工学専攻 修士課程 在学中
          </Typography>

          <Typography variant="h6" component={"h2"}>
            ＜趣味＞
          </Typography>
          <Typography variant="body1" component={"p"}>
            ・プログラミング
            <br />
            ・動画編集
            <br />
            ・デザイン
            <br />
            ・エレクトーン
            <br />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

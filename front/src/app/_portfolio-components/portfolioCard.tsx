"use client";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PortfolioDetailButton from "../_ui/button/portfolioDetailButton";

export default function PortfolioCard() {
  const onClickFunc = () => {
    alert("ポートフォリオ詳細ボタンが押されました。");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/sample_pc.png"
          alt="portfolio image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            カードのタイトル
          </Typography>
          <Typography variant="body2" color="text.secondary">
            カードの説明文
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <PortfolioDetailButton onClick={onClickFunc} />
      </CardActions>
    </Card>
  );
}

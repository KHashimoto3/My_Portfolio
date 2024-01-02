"use client";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function PortfolioCard() {
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
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

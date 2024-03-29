"use client";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import PortfolioDetailButton from "@/components/button/portfolioDetailButton";

type Props = {
  title: string;
  description: string;
  imgPath: string;
  tag: string[];
};

export default function PortfolioCard(props: Props) {
  const { title, description, imgPath, tag } = props;

  const onClickFunc = () => {
    alert("申し訳ございませんが準備中です。もうしばらくお待ちください。");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgPath}
        alt="portfolio image"
      />
      <CardContent>
        {tag.map((tag) => (
          <Chip label={tag} key={tag} sx={{ margin: "2px" }} />
        ))}
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <PortfolioDetailButton onClick={onClickFunc} />
      </CardActions>
    </Card>
  );
}

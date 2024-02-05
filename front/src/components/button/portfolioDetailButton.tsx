"use client";

import { Button } from "@mui/material";

type Props = {
  onClick: () => void;
};

export default function PortfolioDetailButton(props: Props) {
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      sx={{
        marginRadius: "10px",
        fontSize: "14pt",
        maxWidth: "120px",
        borderRadius: "30px",
        color: "white",
        background: "linear-gradient(#3d7dc8 30%, #c57de9 90%)",
      }}
      onClick={onClick}
    >
      MORE
    </Button>
  );
}

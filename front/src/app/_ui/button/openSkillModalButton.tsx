"use client";

import { Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type Props = {
  label: string;
  onClick: () => void;
};

export default function OpenSkillModalButton(props: Props) {
  const { label, onClick } = props;
  return (
    <Button
      variant="contained"
      sx={{
        marginRadius: "10px",
        fontSize: "14pt",
        maxWidth: "100%",
        borderRadius: "30px",
        color: "white",
        background: "linear-gradient(#3d7dc8 30%, #c57de9 90%)",
      }}
      onClick={onClick}
    >
      <KeyboardDoubleArrowRightIcon sx={{ verticalAlign: "middle" }} />
      {label}
    </Button>
  );
}

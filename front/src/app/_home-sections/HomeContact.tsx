"use client";

import { Button, Container, Stack, Typography } from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SectionTitle from "../_ui/text/sectionTitle";

export default function HomeContact() {
  return (
    <Container maxWidth="sm" sx={{ height: "200px" }}>
      <SectionTitle title="~Contact~" />
      <Typography variant="body1" component={"p"}>
        ご興味を持っていただきありがとうございます。
      </Typography>
      <Stack spacing={2} textAlign={"center"} sx={{ marginTop: "20px" }}>
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
          onClick={() => window.open("https://forms.gle/KVG7xSB1c8d7MDmB9")}
        >
          <MailOutlineIcon />
          お問い合わせ
        </Button>
      </Stack>
    </Container>
  );
}

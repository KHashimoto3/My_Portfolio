import { Container, Typography } from "@mui/material";

export default function HomeContact() {
  return (
    <Container maxWidth="md" sx={{ height: "200px" }}>
      <h2 style={{ textAlign: "center" }}>~Contact~</h2>
      <Typography variant="body1" component={"p"}>
        ご興味を持っていただきありがとうございます。
        <br />
        お問い合わせは
        <a href="https://forms.gle/KVG7xSB1c8d7MDmB9" target="_blank">
          こちら
        </a>
        からお願いします。
      </Typography>
    </Container>
  );
}

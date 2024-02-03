import { Typography } from "@mui/material";

type Props = {
  title: string;
};

const typographyStyle = {
  textAlign: "center",
  color: "#006fd1",
  marginTop: "30px",
  marginBottom: "10px",
  fontStyle: "italic",
  fontWeight: "lighter",
};

export default function SectionTitle(props: Props) {
  const { title } = props;
  return (
    <Typography variant="h3" component={"h2"} sx={typographyStyle}>
      {title}
    </Typography>
  );
}

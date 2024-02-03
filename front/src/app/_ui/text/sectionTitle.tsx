import { Typography } from "@mui/material";

type Props = {
  title: string;
};

const typographyStyle = {
  textAlign: "center",
  color: "#0099d1",
};

export default function SectionTitle(props: Props) {
  const { title } = props;
  return (
    <Typography variant="h3" component={"h2"} sx={typographyStyle}>
      {title}
    </Typography>
  );
}

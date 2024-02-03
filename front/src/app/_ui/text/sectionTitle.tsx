import { Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function SectionTitle(props: Props) {
  const { title } = props;
  return (
    <Typography
      variant="h4"
      component={"h2"}
      sx={{ textAlign: "center", color: "#347deb" }}
    >
      {title}
    </Typography>
  );
}

import { Typography } from "@mui/material";

type Props = {
  title: string;
};

const typographyStyle = {
  padding: "0.4em 0.5em",
  color: "#494949",
  background: "#f4f4f4",
  borderLeft: "solid 5px #7db4e6",
  borderBottom: "solid 3px #d7d7d7",
};

export default function StyledHeading2(props: Props) {
  const { title } = props;
  return (
    <Typography variant="h2" component={"h2"} sx={typographyStyle}>
      {title}
    </Typography>
  );
}

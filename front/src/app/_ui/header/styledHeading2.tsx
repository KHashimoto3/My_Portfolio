import "./styledHeading2Style.scss";

type Props = {
  title: string;
};

export default function StyledHeading2(props: Props) {
  const { title } = props;
  return <h2>{title}</h2>;
}

import ReactLoading, { LoadingType } from "react-loading";

interface LoadingProps {
  heigth?: number;
  width?: number;
  type?: LoadingType;
  color?: string | undefined;
}

export const Loading = ({
  heigth = 20,
  width = 20,
  type = "spin",
  color = "white",
}: LoadingProps) => {
  return (
    <ReactLoading height={heigth} width={width} type={type} color={color} />
  );
};

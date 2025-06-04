import { FC } from "react";

export const Typography: FC<{
  children: string;
  color?: string;
  isUnderline?: boolean;
  weight?: 500 | 600 | 700;
}> = ({ children, color, isUnderline = false, weight }) => {
  const style = {
    color: color || "grey",
    textDecoration: isUnderline ? "underline" : "none",
    fontWeight: weight,
    fontSize: 12,
  };

  return <p style={style}>{children}</p>;
};
